import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Ensure that Leaflet styles are imported
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { myDarkTheme } from '../../maninlayout';

export default function Communication() {

    const center = [40.4091, 49.8671];
    const { dark, getSideMenu, getToggleRight } = useContext(myDarkTheme)

    return (
        <div>
            <div className="responsive-logo">

                <Link to="/">
                    <h1 className="responsive-logo-h1 blue" onClick={getToggleRight}>JobSearch</h1>
                </Link>
                <div onClick={getSideMenu}>
                    <box-icon name='menu' color="rgb(187, 187, 187)"></box-icon>
                </div>
            </div>
            <div className="communication">
                <div>
                    <div className='com1'>
                        <h2>Əlaqə</h2>
                        <div>
                            <h2>Ünvan</h2>
                            <p>8 noyabr prospekti, Azure Biznes Mərkəzi, 18-ci mərtəbə.<br /> Bakı, AZ 1025, Azərbaycan</p>
                        </div>
                    </div>

                    <div className='map'>
                        <MapContainer center={center} zoom={13} style={{ height: '260px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={center}>
                                <Popup>
                                    A sample marker!
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>

                    <div className='com2'>
                        <div>
                            <h2>Telefon</h2>
                            <div>
                                <p>+994 12 434 50 30</p>
                                <p>+994 12 488 64 91</p>
                                <p>+994 12 488 64 92</p>
                            </div>
                        </div>
                    </div>

                    <div className='com3'>
                        <div>
                            <h2>Mobil</h2>
                            <div>
                                <p>+994 12 434 50 30</p>
                                <p>+994 12 488 64 91</p>
                            </div>
                        </div>
                    </div>

                    <div className='com4'>
                        <div>
                            <h2>Mobil</h2>
                            <div>
                                <p>info@jobsearch.az</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    )
}