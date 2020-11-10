import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <form onSubmit={props.loadPokemon}>
            <div className="row">
                <div className="col-md-3 offset-md-2">
                    <input type="text" className="form-control" name="search" placeholder="country,title,news"/>
                </div>

                <div className="col-md-3 mt-md-0 py-2 text-md-left">
                    <button className="btn btn-warning">Search</button>
                </div>
            </div>
            </form>
        </div>
    )
}
