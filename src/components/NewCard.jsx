import React from 'react';

function NewCard(props) {
  return (
    <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
      <a href={props.link} target='_blank'>
        {/* overlay */}
        <div className='group-hover:bg-black/70 absolute w-full h-full z-40 transition-all duration-300 object-cover'></div>
      </a>
      <img className='group-hover:scale-125 transition-all duration-500 w-full h-full' src={props.url} alt=''/>
      {/* pretitle */}
      <div className='absolute -bottom-full left-12
      group-hover:bottom-20 transition-all duration-500 z-50'>
        <span className='text-gradient duration-500'>{props.pretitle}</span>
      </div>
      {/* Title */}
      <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
        <span className='text-sm text-white'>{props.title}</span>
        <span className='text-xs text-white'>{props.tech}</span>
      </div>
    </div>
  );
}


export default NewCard;