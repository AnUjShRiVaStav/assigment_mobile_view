export default function Cart(props) {
    return(
      <div className = 'carts'>
        <div className = 'cart'>
          <img  src = {props.imgsrc} alt = 'img' className = 'img' />
          <h4 className = 'span'>{props.name}</h4>
        </div>
  
      </div>
    ); 
  }