import React from 'react'
import Avatar from 'react-avatar';

export default function Avatarr() {
  return (
    <div>
<Avatar googleId="118096717852922241760" size="100" round={true} />
<Avatar facebookId="100008343750912" size="150" />
<Avatar name="Wim Mostmans" size="150" textSizeRatio={1.75} />
<Avatar size="100" facebook-id="invalidfacebookusername" src="http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3" />
<Avatar color={Avatar.getRandomColor('sitebase', ['red', 'green', 'blue'])} name="Wim Mostmans" />
    
    </div>
  )
}
