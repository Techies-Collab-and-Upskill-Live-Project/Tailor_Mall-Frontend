const PreviousBtn = ({handleSubmit}) => {
    return ( 
        <button onSubmit={handleSubmit} className="flex py-3 px-4 justify-center items-center dot rounded-[100px] w-full">
        <span className="text-base text-primary-100 leading-[22.4px]">Previous</span>
      </button>
     );
}
 
export default PreviousBtn;