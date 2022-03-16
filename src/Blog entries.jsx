import React from 'react';

const BlogEntries = () => {
    return (
        <div>
            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
            </p><div className="w3-card-4 w3-margin w3-white">
            <img src="/w3images/bridge.jpg" alt="Norway" style={{width: '100%'}} />
            <div className="w3-container">
                <h3><b>BLOG ENTRY</b></h3>
                <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
            </div>
            <div className="w3-container">
                <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent </p><div className="w3-col l8 s12">
                {/* Blog entry */}
                <div className="w3-card-4 w3-margin w3-white">
                    <img src="/w3images/woods.jpg" alt="Nature" style={{width: '100%'}} />
                    <div className="w3-container">
                        <h3><b>TITLE HEADING</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 7, 2014</span></h5>
                    </div>
                </div></div></div></div></div>

    );
};

export default BlogEntries;