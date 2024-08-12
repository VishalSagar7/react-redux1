import React from 'react'

const Home = (props) => {
    console.log("props",props);
  return (
    <div> 
      <div className='addto-cart'>
        <img style={{height:'40px',position:'absolute' ,right:'20px',top:'20px'}} src='https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png' alt='cart'/>
      </div>
      <h1>HomeComponent</h1>
      <div className='cart-wrapper' style={{marginLeft:'50px', width:'400px', height:'100px' , border : '1px solid black',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
        <div className='img-wrapper item'>
          <img style={{width : '40px'}} src='https://cdsassets.apple.com/live/7WUAS350/images/ios-apps/iphoto/ios15-iphone13-pro-home-camera-callout.png' alt='apple'/>
        </div> 
        <div className='text-wrapper item'>
          <span>
            I-Phone
          </span>
          <span>
            price : $1000
          </span>
        </div>
        <div className='btn-wrapper item'>
          <button   
          onClick={()=>props.addToCartHandler({name:'vishal',age : 90})}
             style={{backgroundColor:'red', padding:'5px',border:'none',color:'white'}}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home;
