import React from 'react'
import Smtp from '../smtp'
export default function ContactScreen() {
  return (
    <div className="row center">
      <div className="center">
        <h1>
            You can reach us at
        </h1>
        <p>PHONE NUMBER:</p>
        <h1>708-897-9757</h1>
        <p>LOCATION:</p>
        <h1>11517 S. Pulaski Rd, Alsip, Il 60803</h1>
        <h1>send us an email below <br/>we will get back to you as soon as possible</h1>
        <Smtp/>
    </div>
    </div>
  )
}
