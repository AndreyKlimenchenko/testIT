const handleClick = () => {
  const info = prompt("Введите любую строку");
  const wordsArray = info.split(" ");

  const newArr = wordsArray.sort(compare);

  const longestWordsArr = newArr.slice(0, 3);

  const result = longestWordsArr.join("; ");

  function compare(prevValue, currentValue) {
    if (prevValue.length > currentValue.length) {
      return -1;
    }
    if (prevValue.length < currentValue.length) {
      return 1;
    }
    return 0;
  }

  alert(result);
};
