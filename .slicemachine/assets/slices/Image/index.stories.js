import MyComponent from '../../../../slices/Image';

export default {
  title: 'slices/Image'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _FullWidth = () => <MyComponent slice={{"variation":"fullWidth","name":"Full Width","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=900&h=500&fit=crop"}},"id":"_FullWidth"}} />
_FullWidth.storyName = 'Full Width'

export const _WithCaption = () => <MyComponent slice={{"variation":"withCaption","name":"With Caption","slice_type":"image","items":[],"primary":{"image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?w=900&h=500&fit=crop"},"caption":[{"type":"paragraph","text":"Nostrud ad consequat sunt irure exercitation Lorem veniam nulla sit ullamco.","spans":[]}]},"id":"_WithCaption"}} />
_WithCaption.storyName = 'With Caption'
