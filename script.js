





function isActive() {
    if(cartProduct.classList.contains("active")) {
        cartProduct.classList.remove("active")
    }
}

document.getElementById("menu-btn").onclick = () => {
    document.querySelector(".sidebar").style.left = "0";
}

document.getElementById("close-sidebar-btn").onclick = () => {
    document.querySelector(".sidebar").style.left = "-250px";
}

document.querySelector("#cart-btn i").onclick = (e) => {
    e.target.parentElement.classList.toggle("active");
    document.querySelector(".cart-box").classList.toggle("active");
}

document.getElementById("search-btn").onclick = (e) => {
    e.target.parentElement.classList.toggle("active");
    document.querySelector(".search").classList.add("active");
}

document.querySelector(".close-search-btn").onclick = () => {
    document.getElementById("search-btn").classList.remove("active")
    document.querySelector(".search").classList.remove("active");
}

document.getElementById("login-btn").onclick = (e) => {
    e.target.classList.add("active")
    document.querySelector(".form-login").classList.add("active")
}

document.getElementById("close-form-btn").onclick = () => {
    document.getElementById("login-btn").classList.remove("active");
    document.querySelector(".form-login").classList.remove("active");
}

const dataOfProducts = [
    {
        id: 1,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/601a101521853_3bc3996a9670fc2801b7f6c59e205288.jpg',
        name: 'Adapter Asus 20V 14A 280W (6.0*3.7) Original',
        priceCents: 6600,
        priceCentsDiscount: 5600,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/601a101521853_3bc3996a9670fc2801b7f6c59e205288.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/601a10169abc9_9d278fa75129291fd7c39a8b27a8662a.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/601a1018221ff_77ef7b42f74936c73d80055d9ec7027b.jpg'
        ]
    },
    {
        id: 2,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/6013dc46e28fd_61sdanupyl._ac_sl1500_.jpg',
        name: 'Adapter Dell 20V/5V 6.5A/1A 130W (Type-C) Original',
        priceCents: 5500,
        priceCentsDiscount: 4500,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/6013dc46e28fd_61sdanupyl._ac_sl1500_.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/6013d45e8ca28_61quttgrjdl._ac_sl1500_.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/6013d460534e6_617v9qodbl._ac_sl1500_.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/6013d46235f42_71lrifhzucl._ac_sl1500_.jpg'
        ]
    },
    {
        id: 3,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5ffd1f7b43e30_20210112_094016_[1].jpg',
        name: 'Adapter Dell 20V/5V 6.5A/1A 130W (Type-C) Original',
        priceCents: 5500,
        priceCentsDiscount: 4500,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5ffd1f7b43e30_20210112_094016_[1].jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5ffd1f7d43ae3_key.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5ffd1f7ea61d4_mouse.jpg'
        ]
    },
    {
        id: 4,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fdc7cc5ddef1_61wgvrrktvl._ac_sl1200__[1].jpg',
        name: 'USB Console Cable 1.8m',
        priceCents: 900,
        priceCentsDiscount: 700,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc7cc5ddef1_61wgvrrktvl._ac_sl1200__[1].jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc7cddc01fa_61tgkonmc5l._ac_sl1200_.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc7cdbf2b9c_61owfg3qnbl._ac_sl1200_.jpg'
        ]
    },
    {
        id: 5,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fdc6c698b139_d413bc5874acef6b046d4f3753d7f24666fd4ac4_original.jpg',
        name: 'Passive HDCVI Transceiver (Balun)',
        priceCents: 700,
        priceCentsDiscount: 500,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc6c698b139_d413bc5874acef6b046d4f3753d7f24666fd4ac4_original.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc6c6b27ecf_25fa128719ddebaa7b4273f6c4d4148c2e08b85f_original.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc6cc2091fc_b6346d982e196c6c736e9f721811e232fec41798_original.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fdc6c8ae47eb_f358dc0cead025738685a0c144a5dabc426674ba_original.jpg'
        ]
    },
    {
        id: 6,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fd84e943c098_4_fans_set.jpg',
        name: '4 RGB Fan Set with Remote I for Game',
        priceCents: 2800,
        priceCentsDiscount: 2400,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fd84e943c098_4_fans_set.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fd84f566a1d4_video_2020-12-15_11-51-51.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fd84f2a20ceb_1yf-0010-00264-v05.jpg'
        ]
    },
    {
        id: 7,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fcf4c35d49d3_20201208_154428_[1].jpg',
        name: 'Type-C to 5 in 1 HDMI Type-C 3xUSB 3.0 Adapter',
        priceCents: 2300,
        priceCentsDiscount: 2000,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf4c35d49d3_20201208_154428_[1].jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf4c41e0728_20201208_154614_[1].jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf4c4940ec5_20201208_155225_[1].jpg'
        ]
    },
    {
        id: 8,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fcf384a89529_hk1_max-main-image-2.jpg',
        name: 'Android Box HK1 Max  Quad-Core 4GB 32GB',
        priceCents: 5700,
        priceCentsDiscount: 4700,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf384a89529_hk1_max-main-image-2.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf3851267af_hk_max_2-updated.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf38522c34f_hk_max_3.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fcf385654284_hk_max_5.jpg'
        ]
    },
    {
        id: 9,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fceeac12ce9b_img_0_adp-90yd_b_19v_4.74a_90w_5.5x2.5_aa.O_O.jpg',
        name: 'Adapter Asus 19V 4.74A 90W (5.5*2.5) Original',
        priceCents: 2500,
        priceCentsDiscount: 1900,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fceeac12ce9b_img_0_adp-90yd_b_19v_4.74a_90w_5.5x2.5_aa.O_O.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fceeac371e56_img_1_adp-90yd_b_19v_4.74a_90w_5.5x2.5_aa.O_O.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fceeac18befa_img_2_adp-90yd_b_19v_4.74a_90w_5.5x2.5_aa.O_O.jpg'
        ]
    },
    {
        id: 10,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fc4a28b2b91d_1_large_1576202231392h.jpg',
        name: 'Adapter Asus 19V 4.74A 90W (5.5*2.5) Original',
        priceCents: 7200,
        priceCentsDiscount: 6200,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fc4a28b2b91d_1_large_1576202231392h.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fc4a28e3156a_3_large_1576202260556q.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fc4a290c8364_4_large_1576202274947i.jpg'
        ]
    },
    {
        id: 11,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5fa0d4588fdd0_d97ee439afba710388c6d14a82a594c2.jpg',
        name: 'Adapter Asus 19V 4.74A 90W (5.5*2.5) Original',
        priceCents: 1500,
        priceCentsDiscount: 1300,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5fa0d4588fdd0_d97ee439afba710388c6d14a82a594c2.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fa0d459e61e8_ca936f25ddabddc85aab51240f209315.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fa0d45b9d435_29ed4443928fabd2323adf277106397d.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5fa0d45dabe22_0b972d12c5c5f9851360a42fa06cb935.jpg'
        ]
    },
    {
        id: 12,
        img: 'https://lgc24.com/rean-web-admin/public/img/product/5f857f749556f_img_0_original-zgb-k1-usb-wired-gaming-mouse-led-backlight-breathing-lamp-office-desktop-laptop-mice.jpg',
        name: 'Mouse USB Gaming K1',
        priceCents: 800,
        priceCentsDiscount: 700,
        imgList: [
            'https://lgc24.com/rean-web-admin/public/img/product/5f857f749556f_img_0_original-zgb-k1-usb-wired-gaming-mouse-led-backlight-breathing-lamp-office-desktop-laptop-mice.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5f857f7678c74_img_3_original-zgb-k1-usb-wired-gaming-mouse-led-backlight-breathing-lamp-office-desktop-laptop-mice.jpg_.webp.jpg',
            'https://lgc24.com/rean-web-admin/public/img/product/5f857f77e468a_img_4_original-zgb-k1-usb-wired-gaming-mouse-led-backlight-breathing-lamp-office-desktop-laptop-mice.jpg_.webp.jpg'
        ]
    },
]

let product = "";

dataOfProducts.forEach(item => {

    var imgList = "";
    
    product += `<div class="product">
                        <div class="product-img">
                            <img src="${item.img}" alt="">
                        </div>
                        <h3 class="product-name">${item.name}</h3>
                        <div class="price-box">
                            <span class="price-cents">$${(item.priceCents / 100).toFixed(2)}</span>
                            <span class="price-cents-discount">$${(item.priceCentsDiscount / 100).toFixed(2)}</span>
                        </div>
                        <div class="product-footer">
                            <button class="btn view"><i class="fa-solid fa-eye"></i></button>
                            <button class="btn add-to-cart">Add To Cart</button>
                        </div>
                    </div>`; 
})

document.querySelector(".product-box").innerHTML = product;

const cart = [];

const addToCarts = document.querySelectorAll(".add-to-cart");

addToCarts.forEach(btn => {
    btn.addEventListener("click", () => {
        var productId = btn.dataset.productId;
        var productImg = btn.dataset.productImg;
        var productName = btn.dataset.productName;
        let inputValue = btn.previousElementSibling.value;
        
        
        let matchItem;
        // check if product id === item id
        cart.forEach(item => {
            if (productId === item.id) {
                matchItem = item;
            }
            
        })
        // add to cart
        if(matchItem) {
            matchItem.qty = parseInt(inputValue)
        }else {
            cart.push({
                    id: productId,
                    img: productImg,
                    name: productName,
                    qty: parseInt(inputValue),
            });
        }
        // update cart qty
        let cartQty = 0;
        
        cart.forEach(item => {
            cartQty += item.qty;
            
        })

        document.getElementById("cart-count-qty").innerHTML = cartQty;
        
        
        showCartProduct();
    })
        
})    
    
// const cartProduct = document.querySelector(".cart-product");


function showCartProduct() {
    var products = "";
    cart.forEach((cart, key) => {
        
        products += `<div class="box">
                                <div class="product">
                                    <div class="img-box">
                                    <img src="" alt="">
                                    </div>
                                    <div>
                                    <div class="product-name">11111</div>
                                    <div class="qty">quantity: <span id="cart-number">111</span></div>
                                    </div>
                                </div>
                                <div class="delete-product" >
                                    <i class="fa-solid fa-xmark"></i>
                                </div>
                            </div>`
    
                            
    })
    
    cartProduct.innerHTML = products;

}

        
        


//         var a = document.querySelectorAll(".cart-product .box .delete-product")
        
//             a.forEach(cart => {
//                 cart.addEventListener("click", () => {
//                     var dataId = cart.dataset.id
//                     console.log(dataId);
                    
//                     cartQty.splice(dataId, 1);
//                     getA();
//                     console.log(cartQty);
                    
//                 })
            
//             })

//     })
    




