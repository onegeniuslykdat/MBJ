interface ImageSource {
  source: string
}

export const MiniHeaderBanner = (props: ImageSource) => {
  return <div className='row'>
      <picture className='img-fluid w-100'>
        <source media='(min-width: 720px)' srcSet={props.source} />
        <source media='(min-width: 400px)' srcSet={'https://i.ytimg.com/vi/d1QJPQwDByA/maxresdefault.jpg'} />
        <img className='img-fluid w-100' src='https://i.ytimg.com/vi/d1QJPQwDByA/maxresdefault.jpg' alt='Banner' />
      </picture>
    </div>
}
