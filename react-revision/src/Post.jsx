
const Counter = (props) => {
    return (
    <div className='flex justify-center'>
        <div className='bg-white h-[20vh] w-[20vw] rounded-lg p-4 text-black'>
            <div className='flex gap-1'>
                <img className='h-12 w-12 rounded-full' src={props.all.img} />
                <span>
                    <div className='font-bold '>{props.all.namee}</div>
                    <div>{props.all.title}</div>
                </span>
            </div>
            <div className='mt-5'>{props.all.des}</div>
        </div>
    </div>    
    )
}

export default Counter