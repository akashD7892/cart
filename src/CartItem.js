import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div style={styles.cartItem} >
                <div className='left-block'>
                    <img style={styles.image} />
                </div>
                <div style={styles.rightBlock}>
                    <div style={{ fontSize: 25 }}>Phone</div>
                    <div style={{ color: '#777' }}>Rs 99</div>
                    <div style={{ color: '#777' }}>Qty:1</div>
                    <div className='cart-item-actions'>
                        {/* Buttton */}

                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    },
    rightBlock: {
        padding: 20
    },
    cartItem: {
        display: 'flex',
        margin: 20
    }
}


export default CartItem;