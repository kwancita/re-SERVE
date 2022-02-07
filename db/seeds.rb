puts "Deleting old data..."

User.destroy_all
Restaurant.destroy_all
Booking.destroy_all

puts "suck seed"

res1 = Restaurant.create(name:"Soothr", address:"204 E 13th St, New York, NY 10003", menu:"https://soothrnyc.com/", image:"https://static01.nyt.com/images/2021/09/15/dining/14rest-soothr5/13rest-soothr5-superJumbo.jpg", cuisine:"Thai" )
res2 = Restaurant.create(name:"Thai Villa", address:"5 E 19th St, New York, NY 10003", menu:"https://direct.chownow.com/order/12278/locations/17123", image:"https://d1ralsognjng37.cloudfront.net/aac3475e-88b0-41d9-b9c4-888c16c186bb", cuisine:"Thai")
res3 = Restaurant.create(name:"Wondee Siam", address:"792 9th Ave, New York, NY 10019", menu:"https://www.wondeesiamnyc.com/menu", image:"https://s3-media0.fl.yelpcdn.com/bphoto/Tp5N6bhAKQxfU4xr790nNA/l.jpg", cuisine:"Thai")
res4 = Restaurant.create(name:"Madame Vo", address:"212 E 10th St, New York, NY 10003", menu:"https://www.madamevo.com/kitchen", image:"https://static01.nyt.com/images/2017/07/19/dining/19HUNGRY-MADAME-slide-U6ST/19HUNGRY-MADAME-slide-U6ST-superJumbo.jpg?quality=75&auto=webp&disable=upscale", cuisine:"Vietnamese")
res5 = Restaurant.create(name:"BCD Tofu House", address:"5 W 32nd St, New York, NY 10001", menu:"https://www.bcdtofuhouse.com/view-the-menu", image:"https://images.squarespace-cdn.com/content/v1/5cc8bc4f93a632622cd1616d/1558025260517-0QEVFYL3BS04KG0RYD7D/image-asset.jpeg?format=1000w", cuisine:"Korean")
res6 = Restaurant.create(name:"Baekjeong NYC", address:"1 E 32nd St, New York, NY 10016", menu:"https://www.baekjeongnyc.com/menu", image:"https://d1ralsognjng37.cloudfront.net/ebec765c-2d11-4382-858a-20812a1361ae.jpeg", cuisine:"Korean")
res7 = Restaurant.create(name:"Izakaya MEW", address:"53 W 35th St, New York, NY 10001", menu:"http://mewnyc.com/menu", image:"https://d1ralsognjng37.cloudfront.net/67898c09-caf0-4eaf-8367-8066db4b5bbd.jpeg", cuisine:"Japanese")
res8 = Restaurant.create(name:"Glur Thai", address:"144 W 19th St, New York, NY 10011", menu:"https://www.glurnyc.com/menu/order-online", image:"https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/424741.jpg", cuisine:"Thai")
res9 = Restaurant.create(name:"Kame", address:"330 8th Ave, New York, NY 10001", menu:"https://www.kamenyc.com/menu", image:"https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=jpeg,quality=50/https://doordash-static.s3.amazonaws.com/media/store/header/95e9025e-7fc1-4ff1-9030-e32878142500.jpeg", cuisine:"Japanese")
res10 = Restaurant.create(name:"Hello Saigon", address:"180 Bleecker St, New York, NY 10012", menu:"http://orderhellosaigon.com/", image:"https://themenustar1.com/upload/2018-05-01/mmm25ae8d9097fdae.jpg", cuisine:"Vietnamese")
