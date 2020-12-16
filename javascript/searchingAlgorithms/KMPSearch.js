const KMPSearch = (text, pattern) => {
  // length of the text and the pattern for futher computations
  let M = text.length;
  let N = pattern.length;

  // computing LPS Array for efficient search implementation
  let lps = computeLPSArray(pattern, N);

  // setting up two pointers for search comparions
  let i = 0;
  let j = 0;

  while (i < M) {
    // if the charater of text matches patter, both pointers are incremented
    if (text[i] === pattern[j]) {
      i += 1;
      j += 1;
    }

    // if the jth pointer reaches the end of the pattern and matches all the chars in text,
    // matching index is logged and j is reset to lps[j-1]
    if (j === N) {
      console.log(i - j);
      j = lps[j - 1];
    }

    // if there are mismatches during the comparison
    // 1. if the jth pointer is not at the 0th index of the pattern, jth pointer resets to lps[j - 1]
    // 2. if the jth pointer is at the 0th index of the pattern, ith pointer is incremented
    if (text[i] !== pattern[j]) {
      if (j !== 0) {
        j = lps[j - 1];
      } else {
        i += 1;
      }
    }
  }
};

const computeLPSArray = (pattern, N) => {
  // lps array that will hold the vale of longest proper prefix suffix
  let lps = new Array(N).fill(0);

  // Setting two pointers for LPS computation
  // Setting len = 0 -> it is the longest length of the previous proper prefix suffix
  let len = 0;
  let i = 1;

  // loop that calculates lps[i] for i = 1 to N - 1
  while (i < N) {
    // As long as the longest prefix equals to the longest suffix both the pointer are incremented with length pushed into the LPS array
    if (pattern[i] === pattern[len]) {
      len += 1;
      lps[i] = len;
      i += 1;
    } else {
      // if there is a mismatch between the values of the pointers then
      // 1. if the length of longest prefix and suffix is not 0 the length equals the lps[len - 1]
      // 2. if the length of the previous longest prefix suffix is 0 lps[i] is 0 and ith pointer is incremented
      if (len !== 0) {
        len = lps[len - 1];
      } else {
        i += 1;
      }
    }
  }

  return lps;
};

KMPSearch("wowomgzomg", "omg")
KMPSearch("ABABDABACDABABCABAB", "ABABCABAB")
KMPSearch("onionionspl", "onions")
