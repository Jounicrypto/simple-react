import React from 'react'
import SocialItems from './SocialItems'

function Social() {
  return (
    <div>
      <ul className="list-group">
      <SocialItems
        p = {{
        media : 'Facebook',
        id : 'facebook',
        img : 'https://picsum.photos/60',
        }}
        />
      <SocialItems
      p ={{
        media : 'Youtube',
        id : 'youtube',
        img : 'https://picsum.photos/61',
      }}
      />
      <SocialItems
      p = {{
        media : 'Instagram',
        id : 'instagram',
        img : 'https://picsum.photos/62',
      }}
      
      />
      <SocialItems
      p ={{
        media : 'Indeed',
        id : 'indeed',
        img : 'https://picsum.photos/63',
      }}
      />
      </ul>
    </div>
  )
}

export default Social
