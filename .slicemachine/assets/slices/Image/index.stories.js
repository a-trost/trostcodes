import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => <MyComponent slice={{"variation":"fullWidth","name":"Full Width","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"}},"id":"_FullWidth"}} />
_FullWidth.storyName = 'Full Width'

export const _WithCaption = () => <MyComponent slice={{"variation":"withCaption","name":"With Caption","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Commodo esse do minim nostrud velit eiusmod id ut fugiat tempor. Eiusmod cillum veniam enim consequat ex mollit adipisicing do minim labore ullamco qui do.","spans":[]}]},"id":"_WithCaption"}} />
_WithCaption.storyName = 'With Caption'
