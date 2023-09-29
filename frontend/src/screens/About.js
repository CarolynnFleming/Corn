import React from 'react'
import ice from '../assets/italian-ice.jpg';
import corn from '../assets/corn-images.jpeg'
export default function About() {
  return (
    <div className='about'>
        <h1 className='row center bob'>We’re a business dedicated to <br/> having the best Popcorn and <br/>Italian Ice flavors to choose <br/>from
</h1>
<div className='row center'>
<img className='ice' src={ice} alt='ice'/>

</div>
<div className='row center'>
<img className='ice' src={corn} alt='corn'/>
</div>
<div className='golden'>

<span className='message'><h2 className='lead'>Our Mission</h2>Providing our customers the very best Gourmet Popcorn in the U.S.A.!! Our rich and savory Cheese Popcorn is a customer favorite! Our luscious Caramel Popcorn is distinctly made from scratch with creamy butter and fresh brown sugar. Together, our Cheese & Caramel Popcorn blend our infamous "Poppin Mix". Our very own expert Poppershave also created many more tantalizing Flavors of popcorn. Offering our popular Banna Pudding flavor, Cheesy Buffalo and Dill flavored popcorn to name a few. Pop in and see or look around our website and see what's Poppin! You're sure to be Amazed. <h2 classname='bob'>Fundraising Available Please Call For More Information</h2></span>


</div>
    
    </div>
  )
}
