

const loading = ({ className = 'h-screen' }) => {
  return (
    <div className={`w-full ${className} flex justify-center items-center uppercase tracking-widest`}>LOADING...</div>
  )
}

export default loading