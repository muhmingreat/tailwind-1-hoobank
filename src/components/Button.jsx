import React from 'react'

const Button = ({styles}) => {
  return (
    <button
      type="button"
      className={`py-4 px-6
    bg-blue-gradient font-poppins
     text-primary outline-none ${styles}
     font-medium text-[18px] rounded-[10px]`}
    >Get stated</button>
  );
}

export default Button