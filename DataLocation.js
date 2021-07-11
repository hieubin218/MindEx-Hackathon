// Array of Cinema Location By Cities and District
// Cities: Ho Chi Minh City, Ha Noi, Da Nang

const CinemaLocation = [
    {
        City: "Ho Chi Minh City",
        District: "Go Vap",
        CinemaID: 11,
        CinemaName: "LOTTE MART & CINEMA GO VAP",
        Location: "242 Nguyen Van Luong Street, Go Vap District, HCMC, Vietnam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Binh Thanh",
        CinemaID: 12,
        CinemaName: "LOTTE CINEMA UNG VAN KHIEM",
        Location: "26 Ung Van Khiem Street, Ward 25, Binh Thanh District, HCMC, Vietnam"

    },
    {
        City: "Ho Chi Minh City",
        District: "Thủ Đức",
        CinemaID: 13,
        CinemaName: "LOTTE CINEMA Thủ Đức",
        Location: "Joy Citipoint Buidling, QL1A, Linh Trung Ward, Thủ Đức District, HCMC, Vietnam"

    },
    {
        City: "Ho Chi Minh City",
        District: "Tan Binh",
        CinemaID: 14,
        CinemaName: "LOTTE CINEMA CONG HOA",
        Location: "Tầng 4, Pico Plaza, 20 Cộng Hòa, P.12, Q.Tân Bình, TP.HCM, Việt Nam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Quận 2",
        CinemaID: 15,
        CinemaName: "LOTTE CINEMA CANTAVIL",
        Location: "Tầng 7, Cantavil Premier, Số 1 đường Song Hành, Xa lộ Hà Nội, P.An Phú, Q.2, TP.HCM, Việt Nam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Quận 4",
        CinemaID: 16,
        CinemaName: "LOTTE CINEMA GOLD VIEW",
        Location: "Tầng 3 TTTM TNL Plaza, Số 346 Đường Bến Vân Đồn, Phường 1, Quận 4, TP. Hồ Chí Minh, Việt Nam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Thủ Đức",
        CinemaID: 17,
        CinemaName: "LOTTE CINEMA CANTAVIL",
        Location: "Tầng 2 Moonlight Residences, Số 102 Đặng Văn Bi, P. Bình Thọ, Q. Thủ Đức, TP. Hồ Chí Minh, Việt Nam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Quận 11",
        CinemaID: 18,
        CinemaName: "LOTTE CINEMA PHÚ THỌ",
        Location: "Tầng 4 Lotte Mart Phú Thọ, Số 968 đường Ba Tháng Hai, P.15, Q.11, TP.HCM, Việt Nam"
    },
    {
        City: "Ho Chi Minh City",
        District: "Quận 1",
        CinemaID: 19,
        CinemaName: "LOTTE CINEMA NOWZONE",
        Location: "Tầng 5, TTTM Nowzone, 235 Nguyễn Văn Cừ, P.Nguyễn Cư Trinh, Q.1, TP.HCM, Việt Nam"
    },


    {
        City: "Da Nang City",
        District: "Hải Châu",
        CinemaID: 20,
        CinemaName: "LOTTE CINEMA NOWZONE",
        Location: "Tầng 5, TTTM Nowzone, 235 Nguyễn Văn Cừ, P.Nguyễn Cư Trinh, Q.1, TP.HCM, Việt Nam"
    },



    {
        City: "Hà Nội",
        District: "Quận Hà Đông",
        CinemaID: 21,
        CinemaName: "LOTTE CINEMA HA DONG",
        Location: "Tầng 4, Mê Linh Plaza Hà Đông, Đường Tô Hiệu, P.Hà Cầu, Q.Hà Đông, TP.Hà Nội, Việt Nam"
    },
    {
        City: "Hà Nội",
        District: "Quận Bắc Từ Liêm",
        CinemaID: 22,
        CinemaName: "LOTTE CINEMA KOSMO",
        Location: "Tầng 2 Kosmo Tây Hồ, Số 161 Xuân La, P. Xuân Tảo, Q. Bắc Từ Liêm, TP. Hà Nội, Việt Nam"
    },
    {
        City: "Hà Nội",
        District: "Quận Hai Ba trung",
        CinemaID: 23,
        CinemaName: "LOTTE CINEMA MINH KHAI",
        Location: "Tầng 2, Tòa Sachi, Hinode City, Số 344 Kim Ngưu, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội"
    },
    {
        City: "Hà Nội",
        District: "Quận Long Bien",
        CinemaID: 24,
        CinemaName: "LOTTE CINEMA LONG BIEN",
        Location: "Tầng 3, TTTM Savico Megamall, số 7-9, đường Nguyễn Văn Linh, P.Gia Thụy, Q.Long Biên, TP.Hà Nội, Việt Nam"
    },
    {
        City: "Hà Nội",
        District: "Quận Cau Giay",
        CinemaID: 25,
        CinemaName: "LOTTE CINEMA THANG LONG",
        Location: "Tầng 3, TTTM Big C Thăng Long, Số 222 Trần Duy Hưng, P.Trung Hoà, Q.Cầu Giấy, TP.Hà Nội, Việt Nam"
    }
];









const movies = [
    {
        MovieName: "BỐ GIÀ",
        MovieID: 1,
        YoutubeLink: "https://youtube.com/embed/jluSu8Rw6YE",
        Description: "Bố già là câu chuyện thường nhật về một gia đình ở một xóm lao động nghèo tại thành phố Hồ Chí Minh, ở đó có bộ tứ anh em Giàu, Sang, Phú, Quý. Ba Sang (Trấn Thành) là cha đơn thân, một mình nuôi hai con Quắn và Bù Tọt, trong đó đứa con trai đầu hơn 20 tuổi tên Quắn (Tuấn Trần) là một YouTuber kiếm tiền từ những lượt xem trên YouTube. Tính ông cần kiệm còn Quắn có phần bốc đồng, nông nổi, có thể mua chiếc quần hay đôi giày giá hơn 10 triệu đồng. Ông hay bao đồng, thường can thiệp vào chuyện láng giềng và cố gắng giúp đỡ tất cả mọi người xung quanh, còn Quắn thì cho rằng mỗi người có một cuộc sống riêng. Dù yêu thương nhau nhưng khoảng cách giữa các thế hệ đã dẫn đến những mâu thuẫn cha con nảy sinh."
    },

    {
        MovieName: "FAST AND FURIOUS 9: THE FAST SAGA",
        MovieID: 2,
        YoutubeLink: "https://www.youtube.com/embed/f02Haxdg7EQ",
        Description: "Fast & Furious 9 nói về trận chiến mới giữa Dom và những người đồng đội của mình. Lần này ngoại trừ nữ phản diện quen thuộc Cipher thì phim có thêm sự xuất hiện của nhân vật Jacob - em trai của Dom."
    },
    {
        MovieName: "TRÙM CUỐI SIÊU ĐẲNG",
        MovieID: 3,
        YoutubeLink: "https://www.youtube.com/embed/mLBRFOpv_js",
        Description: "Mắc kẹt trong một vòng lặp thời gian ngay đúng ngày anh ta bị giết chết, một cựu đặc vụ Roy Pulver (Frank Gillo) đã phát hiện ra manh mới về một dự án bí mật của chính phủ có thể giải đáp bí ẩn đằng sau cái chết vô thời hạn của anh ta. Roy buộc lòng phải chạy đua với thời gian và truy bắt tên Colonel Ventor (Mel Gibson), đầu sỏ của dự án chính phủ này. Trong lúc đó, anh phải thoát khỏi cuộc vây bắt của những tên sát thủ tàn ác quyết tâm ngăn cản Roy tìm ra được sự thật. Liệu Roy Pulver có thể thoát khỏi vòng lặp này và cứu lấy gia đình đồng thời sống lại một lần nữa vào ngày mai?"
    },
    {
        MovieName: "BÀN TAY DIỆT QUỶ",
        MovieID: 4,
        YoutubeLink: "https://www.youtube.com/embed/uqJ9u7GSaYM",
        Description: "Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ sĩ MMA Yong Hoo (Park Seo Joon thủ vai) đã dấn thân vào hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật về cái chết của cha Yong Hoo cũng dần được hé lộ cũng như nguyên nhân anh trở thành “người được chọn”."
    },
    {
        MovieName: "GODZILLA ĐẠI CHIẾN KONG",
        MovieID: 5,
        YoutubeLink: "https://www.youtube.com/embed/odM92ap8_c0",
        Description: "Khi hai kẻ thù truyền kiếp gặp nhau trong một trận chiến ngoạn mục, số phận của cả thế giới vẫn còn bị bỏ ngỏ… Bị đưa khỏi Đảo Đầu Lâu, Kong cùng Jia, một cô bé mồ côi có mối liên kết mạnh mẽ với mình và đội bảo vệ đặc biệt hướng về mái nhà mới. Bất ngờ, nhóm đụng độ phải Godzilla hùng mạnh, tạo ra một làn sóng hủy diệt trên toàn cầu. Thực chất, cuộc chiến giữa hai kẻ khổng lồ dưới sự thao túng của các thế lực vô hình mới chỉ là điểm khởi đầu để khám phá những bí ẩn nằm sâu trong tâm Trái đất."
    },
    {
        MovieName: "LẬT MẶT 48H",
        MovieID: 6,
        YoutubeLink: "https://www.youtube.com/embed/kBY2k3G6LsM",
        Description: "Chuyện phim kể về Hiền (Võ Thành Tâm) - một cựu vận động viên võ thuật sau khi giải nghệ vì chấn thương đã cùng vợ (Ốc Thanh Vân) và con gái về quê thăm gia đình Lâm (Mạc Văn Khoa). Họ bị cuốn vào một cuộc rượt đuổi với tay phản diện A Dìn (Huỳnh Đông). Để bảo vệ cho gia đình nhỏ, Hiền phải đưa vợ con chạy trốn khắp miền Tây sông nước với sự trợ giúp của người bạn thật thà và hài hước."
    },

    {
        MovieName: "SIÊU TRỘM",
        MovieID: 7,
        YoutubeLink: "https://www.youtube.com/embed/XfLslifRe0g",
        Description: "Ngân hàng Tây Ban Nha là một nơi bất khả xâm phạm, không một tên trộm nào có thể bước vào. Được xem như một nơi bí ẩn bậc nhất trên thế giới, ngân hàng này không có bản thiết kế, không dữ liệu lưu lại và không một ai biết đến cấu trúc sắp đặt bên trong chiếc két sắt hơn trăm năm tuổi. Thử thách này đã khơi dậy sự tò mò của Thom (Freddie Highmore) – một kỹ sư thiên tài quyết định thử đột nhập vào sâu bên trong nơi này và lật mở bí ẩn của chiếc két sắt."
    },

    {
        MovieName: "THE UNHOLLY: ẤN QUỶ",
        MovieID: 8,
        YoutubeLink: "https://www.youtube.com/embed/NmQiJPLYzPI",
        Description: "Bộ phim xoay quanh cựu nhà báo nổi tiếng Fenn hiện đang thất nghiệp vì dính vào vụ bê bối làm phóng sự giả để câu view. Và cô bé Alice bị câm điếc bẩm sinh từ nhỏ hiện đang sống tại một thị trấn ven."
    },
    {
        MovieName: "MORTAL KOMBAT: CUỘC CHIẾN SINH TỬ",
        MovieID: 9,
        YoutubeLink: "https://www.youtube.com/embed/3JPgwgMoMZE",
        Description: "Mortal Kombat: Đấu Trường Sinh Tử xoay quanh võ sĩ võ thuật tổng hợp Cole Young (Lewis Tan), người mang trên mình một vết chàm rồng đen bí ẩn - biểu tượng của Mortal Kombat. Cole Young không hề biết về dòng máu bí ẩn đang chảy trong người anh, hay vì sao anh lại bị tên sát thủ Sub-Zero (Joe Taslim) săn lùng. Vì sự an nguy của gia đình, Cole cùng với một nhóm những chiến binh đã được tuyển chọn để tham gia vào một trận chiến đẫm máu nhằm chống lại những kẻ thù đến từ Outworld."
    },
    {
        MovieName: "The 8TH NIGHT",
        MovieID: 10,
        YoutubeLink: "https://www.youtube.com/embed/DbYu4-XYNss",
        Description: "The 8th Night kể về một người đàn ông từng là một nhà trừ tà, đau khổ cho đến khi đối mặt với một con quỷ được giải thoát. Màn đêm tồn tại giữa thực và không, cuộc đấu tranh của họ để ngăn chặn sự phục sinh của con quỷ đã bắt đầu."
    }
];