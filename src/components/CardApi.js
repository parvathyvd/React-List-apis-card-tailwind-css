import React from 'react';

const CardApi = ({api}) => {
    const renderDetail = (text,field) =>{
        return <p>{text}: <span className='font-semibold'>{api[field] || '-'}</span></p>
    }
    return (
        <div>
            <a href={api.Link} target="_blank">
                <div className='border-2 p-2 border-pink-500 text-gray-600 rounded-md bg-pink-100 hover: bg-pink-300 cursor-pionter h-full'>
                    {renderDetail('Title', 'API')}
                    {renderDetail('Description', 'Description')}
                    {renderDetail('Auth', 'Auth')}
                    {renderDetail('Cors', 'Cors')}
                    {renderDetail('Category', 'Category')}
                </div>
            </a>
        </div>
    );
};

export default CardApi;