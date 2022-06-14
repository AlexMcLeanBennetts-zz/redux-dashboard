function MainTitle({ name }) {
    return (
        <div className='mb-10'>
            <div className='mb-6'>
                <p className='font-sans text-6xl font-bold text-rose-600'>Welcome back, {name}!</p>
            </div>
            <h1 className="font-sans text-3xl font-bold text-rose-600 italic">Your Policy Information</h1>
        </div>
    )
}

export default MainTitle;