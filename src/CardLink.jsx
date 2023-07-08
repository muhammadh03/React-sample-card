import React from 'react'; // needed for creating a component which uses

//CardLink Component Codes
function cardLink ({title,description,link}) {
    return (
        <div 
        style={{
            border: '1px solid black',
            backgroundColor: 'white',
            height: '200px',
            width: '350px',
            borderRadius: '10px',
            display: 'inline-block',
            margin: '16px',
            padding: '16px',
            minWidth: '300'
        }}>
            <div 
            style={{
                display: 'inline-block'
            }}>
                <i className="fa-solid fa-house fa-2x"></i>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div>
                <a 
                href={link} 
                target='blank' 
                style={{
                    marginTop: '20px'
                }}
                >
                        Take a look at link
                </a>
               </div>    
        </div>
    )
}

export default cardLink