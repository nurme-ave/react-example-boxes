function Box(props) {

  const styles = {
    backgroundColor: props.on ? '#00f' : "#fff"
  }

  return (
    <div 
      style={styles} 
      className="box"
      onClick={() => props.handleClick(props.id)}
    >
    </div>
  )
}

export default Box;