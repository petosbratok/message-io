const MyMessage = ({message}) => {
  if (message?.attachments?.length > 0){
    return (
      <img
        className="message-image"
        src={message.attachments[0].file}
        alt="messages-attachment"
        style={{ float: 'right' }}
      />
    )
  }

  // {message.text.substring(3, message.text.length - 4)}
  return (
    <div className="message" style={{float: 'right', mirginRight:'18px', color: 'white', backgroundColor:'#3B2A50'}}>
    {message.text}
    </div>
  )
}

export default MyMessage;
