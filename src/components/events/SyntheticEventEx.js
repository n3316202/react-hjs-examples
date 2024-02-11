function SyntheticEventEx(props){
      
    return (
		<input
		type="text"
		name="message"
		placeholder="입력하세요"
		onChange={(e) => {
			console.log(e);
		}}
		/>
    );
}

export default SyntheticEventEx

