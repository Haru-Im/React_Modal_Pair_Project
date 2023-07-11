
// Name 
export const NameHandler = (e, setName) => {
  setName(e.target.value);
};

// Numer
export const NumberHandler = (e, setNumber) => {
  const inputValue = e.target.value;
  let numericValue = inputValue.replace(/\D/g, "");

  if (numericValue === "") {
    numericValue = 0;
  }

  const formattedValue = parseInt(numericValue, 10).toLocaleString();
  setNumber(formattedValue);
};

// Alert
export const ButtonHandler = (name, number, setName,setNumber) => {
  if (name === "" && number === "0" ) {
    alert("이름과 가격 모두 입력해주세요.");
  } else {
    alert(`name: ${name}, price: ${number}`);
  }

  setName("");
  setNumber(0);
};
