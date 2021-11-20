const mongoose = require('mongoose');
const account = require('./Account');
const buyer = require('./Buyer');
const seller = require('./Seller')
const admin = require('./Admin');
const product = require('./Product');
const order = require('./Order')
const comment = require('./Comment');
const detailoforder = require('./DetailOfOrder')
  
  
mongoose.connect('mongodb://127.0.0.1:27017/QLBH', function(err) {
    if (err) throw err;
    else{

      // Insert data for Account
      account.insertMany([
        { AccountID: 'Acc0001', Username: 'tk01', Password: '001', AccountType: 'Seller', AccountCreateDate: '2021-09-09', Email: 'djhasjdb@gmail.com',
        AccountImage: 'https://st3.depositphotos.com/3369547/12852/v/950/depositphotos_128525738-stock-illustration-woman-female-avatar-isolated.jpg',
        AccountStatus: 'not locked'},

       { AccountID: 'Acc0002', Username: 'tk02', Password: '002', AccountType: 'Seller', AccountCreateDate: '2021-10-09', Email: 'ddsfdsjhasjdb@gmail.com',
       AccountImage: 'https://yfbca.org/wp-content/uploads/2019/09/nguyen-quang-hai.jpg',
       AccountStatus: 'not locked'},

        { AccountID: 'Acc0003', Username: 'tk03', Password: '003', AccountType: 'Seller', AccountCreateDate: '2021-12-09', Email: 'dsdfjhasjdb@gmail.com',
        AccountImage: 'https://photo-cms-plo.zadn.vn/Uploaded/2021/yqjvzdjwp/2020_11_18/psg-mbappe-1_qowi.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0004', Username: 'tk04', Password: '004', AccountType: 'Seller', AccountCreateDate: '2021-12-12', Email: 'asvfdjdb@gmail.com',
        AccountImage: 'https://baoquocte.vn/stores/news_dataimages/nguyennga/032020/27/16/1938_PRI_80619729.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0005', Username: 'tk05', Password: '005', AccountType: 'Buyer', AccountCreateDate: '2021-12-11', Email: 'dj23hasvfdjdb@gmail.com',
        AccountImage: 'https://media-cdn.laodong.vn/storage/newsportal/2021/3/23/891828/Haaland.jpg?w=414&h=276&crop=auto&scale=both',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0006', Username: 'tk06', Password: '006', AccountType: 'Buyer', AccountCreateDate: '2021-08-09', Email: 'djh456fdjdb@gmail.com',
        AccountImage: 'https://media.vov.vn/sites/default/files/styles/large/public/2021-09/8._ronaldo.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0007', Username: 'tk07', Password: '007', AccountType: 'Buyer', AccountCreateDate: '2021-12-10', Email: 'djdb@gmail.com',
        AccountImage: 'https://thoidai.com.vn/stores/news_dataimages/nam.hoang/122019/26/14/2736_Lewandowski-nguoi-dan-ong-cua-nhung-ki-luc-1.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0008', Username: 'tk08', Password: '008', AccountType: 'Buyer', AccountCreateDate: '2021-08-09', Email: 'djh3657db@gmail.com',
        AccountImage: 'https://cdnimg.vietnamplus.vn/uploaded/tngztn/2021_06_09/diego_llorente.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0009', Username: 'tk09', Password: '009', AccountType: 'Admin', AccountCreateDate: '2021-12-09', Email: 'd1234djdb@gmail.com',
        AccountImage: 'https://vnn-imgs-f.vgcloud.vn/2021/06/24/16/kante.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0010', Username: 'tk10', Password: '010', AccountType: 'Admin', AccountCreateDate: '2021-05-12', Email: 'djdfssdfdjdb@gmail.com',
        AccountImage: 'https://bangsport.net/wp-content/uploads/2021/06/gerard-pique.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0011', Username: 'tk11', Password: '011', AccountType: 'Admin', AccountCreateDate: '2021-12-09', Email: 'dj678svfdjdb@gmail.com',
        AccountImage: 'https://hanoimoi.com.vn/Uploads/images/phananh/2020/07/24/cauthu.jpg',
        AccountStatus: 'not locked'},

        { AccountID: 'Acc0012', Username: 'tk12', Password: '012', AccountType: 'Admin', AccountCreateDate: '2021-12-08', Email: 'djhasvf987djdb@gmail.com',
        AccountImage: 'https://media-cdn.laodong.vn/Storage/NewsPortal/2021/5/5/905604/Doan-Van-Hau.jpg',
        AccountStatus: 'not locked'},
      ])


      // Insert data for Admin
      admin.insertMany([
        { AdminID: 'Ad0001', AdminName: 'Nguyen Van Anh', AdminPhone: '0123456789', AccountID: 'Acc0009'  },
        { AdminID: 'Ad0002', AdminName: 'Le Van Bao', AdminPhone: '0123656789', AccountID: 'Acc0010' },
        { AdminID: 'Ad0003', AdminName: 'Nguyen Van Trang', AdminPhone: '0123456799', AccountID: 'Acc0011' },
        { AdminID: 'Ad0004', AdminName: 'Trinh Van Cong', AdminPhone: '0122456789', AccountID: 'Acc0012' },
      ])


      // Insert data for Buyer
      buyer.insertMany([
        { BuyerID: 'Buy0001', BuyerName: 'Nguyen Thanh Binh', BuyerAddress: '666/46/35 3/2 Street, Ward 14, District 10, Ho Chi Minh city', BuyerPhone: '0322 148 877', BuyerBirthday: '2000-12-12', AccountID: 'Acc0005' },
        { BuyerID: 'Buy0002', BuyerName: 'Nguyen Van Banh', BuyerAddress: '198 Tran Quang Khai, Dist.1, Ho Chi Minh city', BuyerPhone: '0322 238 877', BuyerBirthday: '1995-12-2', AccountID: 'Acc0006' },
        { BuyerID: 'Buy0003', BuyerName: 'Le Thi Thao', BuyerAddress: 'Floor 19, Harbour View Tower 35 Nguyen Hue Street, Ben Nghe Ward, Ho Chi Minh city', BuyerPhone: '0312 148 877', BuyerBirthday: '1990-02-12', AccountID: 'Acc0007' },
        { BuyerID: 'Buy0004', BuyerName: 'Tran Thanh Phat', BuyerAddress: '347 Tran Hung Dao St., Quy Nhon City, Binh Dinh province', BuyerPhone: '0122 148 877', BuyerBirthday: '1980-05-12', AccountID: 'Acc0008' },
      ])


      // Insert data for Seller
      seller.insertMany([
        { SellerID: 'Sell0001', SellerName: 'Le Thi Dan', SellerAddress: '22 Hai Ba Trung, Thai Binh City, Thai Binh', SellerPhone: '023 8489 635',  AccountID: 'Acc0001' },
        { SellerID: 'Sell0002', SellerName: 'Duong Anh Thanh', SellerAddress: '245 Hai Ba Trung St Ward 6, Dist. 3, Ho Chi Minh city', SellerPhone: '023 8589 635',  AccountID: 'Acc0002' },
        { SellerID: 'Sell0003', SellerName: 'Tran Thi Van Anh', SellerAddress: '558 Hoang Quoc Viet, Cau Giay District, Hanoi', SellerPhone: '012 8489 635',  AccountID: 'Acc0003' },
        { SellerID: 'Sell0004', SellerName: 'Nguyen Thi Thuong', SellerAddress: ' 23 Nguyen Thai Son, Ward 3, Go Vap Dist., Ho Chi Minh city', SellerPhone: '023 8259 635',  AccountID: 'Acc0004' },
      ])


      // Insert data for Order
      order.insertMany([
        { OrderID: 'Ord0001', OrderCreateDate: '2021-12-12', MethodOfPayment: 'cash', DeliveryDestination: '666/46/35 3/2 Street, Ward 14, District 10, Ho Chi Minh city', CustomerPhone: '0322 148 877', CustomerName: 'Nguyen Thanh Binh', SumPrice: 1000000, OrderStatus: 'delivering', ShipPrice: 10000, SellerID: 'Sell0001', BuyerID: 'Buy0001'},
        { OrderID: 'Ord0002', OrderCreateDate: '2021-12-10', MethodOfPayment: 'transfer', DeliveryDestination: '198 Tran Quang Khai, Dist.1, Ho Chi Minh city', CustomerPhone: '0322 238 877', CustomerName: 'Nguyen Van Banh', SumPrice: 2000000, OrderStatus: 'delivered', ShipPrice: 20000, SellerID: 'Sell0002', BuyerID: 'Buy0002'},
        { OrderID: 'Ord0003', OrderCreateDate: '2021-12-11', MethodOfPayment: 'cash', DeliveryDestination: 'Floor 19, Harbour View Tower 35 Nguyen Hue Street, Ben Nghe Ward, Ho Chi Minh city', CustomerPhone: '0312 148 877', CustomerName: 'Le Thi Thao', SumPrice: 3000000, OrderStatus: 'delivering', ShipPrice: 30000, SellerID: 'Sell0003', BuyerID: 'Buy0003'},
        { OrderID: 'Ord0004', OrderCreateDate: '2021-12-9', MethodOfPayment: 'transfer', DeliveryDestination: '347 Tran Hung Dao St., Quy Nhon City, Binh Dinh province', CustomerPhone: '0122 148 877', CustomerName: 'Tran Thanh Phat', SumPrice: 4000000, OrderStatus: 'delivered', ShipPrice: 40000, SellerID: 'Sell0004', BuyerID: 'Buy0004'},
      ])


      // Insert data for Product
      product.insertMany([
        { ProductID: 'Pro0001', ProductName: 'CoolMate jacket', ProductType: 'clothes', ProductPrice: 110000, Producer: 'CoolMate', UploadDate: '2021-01-01', Origin: 'VietNam', Description: 'soft, many colors to choose, waterproof', ProductStatus: 'in stocks', WarrantyTime: '6 months', Material: ['cotton','industrial fabric'],
        ProductImage: ['https://media.coolmate.me/uploads/September2021/BT5A8038-Edit-copy_29.jpg'],
        SellerID: 'Sell0001'
        },

        { ProductID: 'Pro0002', ProductName: 'HP gaming keyboard', ProductType: 'electric', ProductPrice: 6600000, Producer: 'HP', UploadDate: '2021-01-01', Origin: 'China', Description: 'many function buttons, led RGB', ProductStatus: 'in stocks', WarrantyTime: '16 months', Material: ['plastic', 'metal'],
        ProductImage: ['https://rukminim1.flixcart.com/image/416/416/k7ksvww0/keyboard/gaming-keyboard/z/y/5/hp-k500f-gaming-keyboard-original-imafpsfakftunzkg.jpeg?q=70'],
        SellerID: 'Sell0002'
        },

        { ProductID: 'Pro0003', ProductName: 'Vsmart smartphone', ProductType: 'electric', ProductPrice: 2970000, Producer: 'Vsmart', UploadDate: '2021-01-01', Origin: 'VietNam', Description: '4GB RAM, 64GB internal memory, many color to choose', ProductStatus: 'in stocks', WarrantyTime: '1 year', Material: ['plastic','metal'],
        ProductImage: ['https://cdn.tgdd.vn/Products/Images/42/227529/vsmart-live-4-trang-200x200.jpg'],
        SellerID: 'Sell0003'
        },

        { ProductID: 'Pro0004', ProductName: 'Logitech gaming mouse', ProductType: 'electric', ProductPrice: 3960000, Producer: 'Logitech', UploadDate: '2021-01-01', Origin: 'Taiwan', Description: 'many colors to choose, waterproof, led RGB', ProductStatus: 'in stocks', WarrantyTime: '6 months', Material: ['alloy','plastic'],
        ProductImage: ['https://www.powerplanetonline.com/cdnassets/raton_gaming_logitech_g102_prodigy_usb_negro_01_l.jpg'],
        SellerID: 'Sell0004'
        },

      ])


      // Insert data for DetailOfOrder
      detailoforder.insertMany([
        { Quantity: 9, UnitPrice: 990000, OrderID: 'Ord0001', SellerID: 'Sell0001', ProductID: 'Pro0001' },
        { Quantity: 3, UnitPrice: 1980000, OrderID: 'Ord0002', SellerID: 'Sell0002', ProductID: 'Pro0002' },
        { Quantity: 1, UnitPrice: 2970000, OrderID: 'Ord0003', SellerID: 'Sell0003', ProductID: 'Pro0003'  },
        { Quantity: 1, UnitPrice: 3960000, OrderID: 'Ord0004', SellerID: 'Sell0004', ProductID: 'Pro0004'  },
      ])
      

      // Insert data for Comment
      comment.insertMany([
        { NumberID: 1, CommentCreateDate: '2021-12-13', Content: 'Nice jacket !!, MUST BUY', SellerID: 'Sell0001', ProductID: 'Pro0001', AccountID: 'Acc0005' },
        { NumberID: 1, CommentCreateDate: '2021-12-11', Content: 'Bad quality, not as I expected', SellerID: 'Sell0002', ProductID: 'Pro0002', AccountID: 'Acc0006' },
        { NumberID: 1, CommentCreateDate: '2021-12-12', Content: 'Responsible price, better than I expected', SellerID: 'Sell0003', ProductID: 'Pro0003', AccountID: 'Acc0007' },
        { NumberID: 1, CommentCreateDate: '2021-12-10', Content: 'Quite expensive but good quality', SellerID: 'Sell0004', ProductID: 'Pro0004', AccountID: 'Acc0008' },

      ])


      console.log("Data inserted!!");
    }
});