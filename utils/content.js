export function makeUrl(article) {
  return `${article.dir.split('content').join('')}/${article.base
    .split('.json')
    .join('')}`;
}

export function filterPosts(summaryJson) {
  return (
    summaryJson &&
    summaryJson.fileMap &&
    Object.keys(summaryJson.fileMap)
      .filter(file => {
        if (file.indexOf('content/posts') === 0) return true;
        return true;
      })
      .map(file => {
        return summaryJson.fileMap[file];
      })
      .sort((a, b) => {
        const aDate = Date.parse(a.date);
        const bDate = Date.parse(b.date);
        return bDate > aDate ? 1 : -1;
      })
  );
}

export function formatDate(dateString) {
  const utcString = new Date(dateString).toUTCString();
  const splitDate = utcString.split(' ');
  const dateArr = splitDate.slice(1, 4);
  // Swap day and month.
  // dateArr.splice(1, 1, dateArr.splice(0, 1, dateArr[1])[0])
  return dateArr.join(' ');
}
