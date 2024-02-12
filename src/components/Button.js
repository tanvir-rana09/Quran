import React from 'react'

const Button = ({className,text}) => {
	
  return (
	<div>
		<button className={`text-xl border px-5 border-black py-0.5 hover:bg-third ${className}`}>{text}</button>
	</div>
  )
}

export default Button