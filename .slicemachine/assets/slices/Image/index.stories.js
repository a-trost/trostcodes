import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => <MyComponent slice={{"variation":"fullWidth","name":"Full Width","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?w=900&h=500&fit=crop"}},"id":"_FullWidth"}} />
_FullWidth.storyName = 'Full Width'

export const _WithCaption = () => <MyComponent slice={{"variation":"withCaption","name":"With Caption","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1560457079-9a6532ccb118?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Exercitation reprehenderit labore velit velit non. Labore ex tempor veniam aliqua laborum et. Minim labore qui proident aliqua in.","spans":[]}]},"id":"_WithCaption"}} />
_WithCaption.storyName = 'With Caption'
