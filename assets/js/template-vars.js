/*
<br class="forMob"> = adds New Line for mobile view
<br class="hide-mob"> = adds New Line for desktop view

Additional configurations:
    1. visible = true or false (to remove/hide certain section)
    2. buttonPulse = url and text properties for the pulsating button
*/ 
const IMG_PATH = './assets/img/'

const templateData = {
    logo: 'logo.png',
    buttonPulse: {
        url: 'https://getsightcarefast.net/video/int/?aff_id=88686',
        text: 'Get -70% Discount'
    },
    header: {
        visible: true,
        background: '#03254c url(./assets/img/banner.jpg) no-repeat top',
        headerSlides: [
            {
                background: 'url("./assets/img/bnr-slid-img1.png") center/cover no-repeat',
                image: 's5-prd.png'
            }
        ],
        subTitle: {
            textColor: '#FFF',
            text: 'Experience Crystal-Clear Vision',
        },        
        title: {
            textColor: '#FFF',
            text: 'Unleash the Power of Our 20/20 Vision Supplement!',
            mob: 'Experience Crystal-Clear Vision: Unleash the Power of Our 20/20 Vision Supplement!', //for mobile view
        },
        ingredients: {
            textColor: '#FFF',
            list: [
                {
                    icon: 'bnr-icon1.png',
                    text: 'Rediscover <br class="forMob">Clear <br class="forTab hide-mob">Vision'
                },
                {
                    icon: 'bnr-icon2.png',
                    text: 'Naturally <br class="forMob">Sharpened <br class="forTab hide-mob">Focus'
                },
                {
                    icon: 'bnr-icon3.png',
                    text: 'Banish <br class="forMob">the <br class="forTab hide-mob">blur'
                },
                {
                    icon: 'bnr-icon4.png',
                    text: 'ReEnergize <br class="forMob">Your<br class="forTab hide-mob"> Eyes'
                }
            ]
        },
        review: {
            textColor: '#FFF',
            image: 'rewv-img.png',
            name: '- Susan E , 65',
            text: '<b>"Unbelievable results!</b> &#128525; My vision is now sharp,focused, and fatigue-free!"'
        }
    }
}