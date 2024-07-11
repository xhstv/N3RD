var rule = {
    类型: '影视',
    title: '4K-AV',
    host: 'https://4k-av.com',
    url: '/fyclass/page-fypage.html',
    searchUrl: '/s?q=**&page=fypage',
    searchable: 2,
    quickSearch: 0,
    headers: {
        'User-Agent': 'IOS_UA',
    },
    timeout: 5000,
    class_parse: '#cate_list&&li;a&&title;a&&href;/(\\w+)/',
//   cate_exclude: '成人视频',
    play_parse: true,
    lazy: $js.toString(() => {
        input = {parse: 1, url: input, header: rule.headers, js: ''}
    }),
    double: true,
    推荐: '#recommlist;ul&&li;h2&&Text;img&&src;span&&Text;a&&href',
    一级: '#MainContent_newestlist&&.NTMitem;h2&&Text;img&&src;div.resyear&&Text;a&&href',
    二级: {
        title: 'h2&&Text;#MainContent_tags&&Text',
        img: 'img&&src',
        desc: '#MainContent_videodetail&&label&&Text;#MainContent_videodetail&&label:eq(2)&&Text;;;',
        content: '',
        tabs: '',
        lists: '#rtlist:eq(#id) li',
        tab_text: '4K-AV',
    },
    搜索: '*',
}