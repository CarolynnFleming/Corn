import React from 'react'
import Smtp from '../smtp'
import Des2 from '../components/banners/Des2'
import Des1 from '../components/banners/Des1'
export default function ContactScreen() {
  return (
    <div className="row center">
    <Des1/>
      <div className="center">
        <h1 className='bob'>
            You can reach us at
        </h1>
        <h2 className='bob'>PHONE NUMBER:</h2>
        <h1 className='lead'>708-897-9757</h1>
        <h2 className='bob'>LOCATION:</h2>
        <h1 className='lead'>11517 S. Pulaski Rd, Alsip, Il 60803</h1>
        <h1 className='bob'>send us an email below <br/>we will get back to you as soon as possible</h1>
        <Smtp/>
    </div>
    <Des2/>
    </div>
  )
}
