import React, {Component} from 'react';
import './DogList.css';
import {Link} from 'react-router-dom'


class DogList extends Component{
    render(){
        return(
            <div>
                <h1 className='display-1 text-center my-5'>Dogs List!</h1>
                    <div className='row'>
                        {this.props.dogs.map(dog => (
                            <div className='Dog col-lg-4 text-center' key={dog.name}>
                                <img src={dog.src} alt={dog.name} />
                                <Link className="underline" to={`dogs/${dog.name}`}><h3>{dog.name}</h3></Link>
                            </div>
                        ))}
                    </div>
                </div>
        )
    }
}

export default DogList;