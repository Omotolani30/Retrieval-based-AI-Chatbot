const knowledgeBase = require("./knowledge/knowledgeBase");

const stopWords = [
  "what", "is", "are", "the", "a", "an", "of", "about",
  "tell", "me", "please", "can", "you", "i", "want",
  "know", "how", "much", "does", "do", "where", "when",
  "to", "for", "in", "on", "at", "and"
];

function preprocess(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function tokenize(text) {
  return preprocess(text)
    .split(/\s+/)
    .filter(word => word.length > 0 && !stopWords.includes(word));
}

function getLevenshteinDistance(a, b) {
  const matrix = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function isFuzzyMatch(userWord, keywordToken) {
  if (userWord === keywordToken) return true;
  if (userWord + "s" === keywordToken || keywordToken + "s" === userWord) return true;

  const distance = getLevenshteinDistance(userWord, keywordToken);
  if (keywordToken.length > 5 && distance <= 2) return true;
  if (keywordToken.length > 3 && distance <= 1) return true;

  return false;
}

function detectIntent(message) {
  const words = tokenize(message);
  
  const cleanedRawMessage = preprocess(message);
  const unspacedUserMessage = cleanedRawMessage.replace(/\s+/g, "");

  if (words.length === 0 && unspacedUserMessage.length === 0) return null;

  let bestMatch = null;
  let highestScore = 0;
  let longestKeywordMatchLength = 0;

  for (const item of knowledgeBase) {
    let score = 0;
    let maxKeywordTokensMatched = 0;

    // Evaluate mandatory required conditions
    if (item.required) {
      let passed = true;
      for (const requiredWord of item.required) {
        const requiredTokens = tokenize(requiredWord);
        if (requiredTokens.length === 0) continue;
        
        // Check standard token match OR if the unspaced required word exists in the unspaced message
        const unspacedRequired = preprocess(requiredWord).replace(/\s+/g, "");
        const exists = requiredTokens.every(token => words.some(userWord => isFuzzyMatch(userWord, token))) || 
                       unspacedUserMessage.includes(unspacedRequired);
                       
        if (!exists) {
          passed = false;
          break;
        }
      }
      if (!passed) continue;
    }

    // Evaluate keywords
    for (const keyword of item.keywords) {
      const keywordTokens = tokenize(keyword);
      if (keywordTokens.length === 0) continue;

      // 1. Standard Tokenized Matching check
      let matched = keywordTokens.every(token =>
        words.some(userWord => isFuzzyMatch(userWord, token))
      );

      // 2. 💡 NEW: Unspaced String Normalization Fallback
      // If standard token matching fails, strip all spaces from the keyword and check for compound alignment
      if (!matched) {
        const unspacedKeyword = preprocess(keyword).replace(/\s+/g, "");
        if (unspacedKeyword.length > 0 && (unspacedUserMessage.includes(unspacedKeyword) || unspacedKeyword.includes(unspacedUserMessage))) {
          matched = true;
        }
      }

      if (matched) {
        const tokenCount = keywordTokens.length;
        const currentKeywordScore = tokenCount > 1 ? tokenCount * 5 : 2;
        
        score += currentKeywordScore;

        if (tokenCount > maxKeywordTokensMatched) {
          maxKeywordTokensMatched = tokenCount;
        }
      }
    }

    if (
      score > highestScore || 
      (score === highestScore && score > 0 && maxKeywordTokensMatched > longestKeywordMatchLength)
    ) {
      highestScore = score;
      longestKeywordMatchLength = maxKeywordTokensMatched;
      bestMatch = item;
    }
  }

  if (highestScore < 2) {
    return null;
  }

  return bestMatch;
}

module.exports = detectIntent;