$(function() {
  function buildHTML(parent) {
    let html = `
                <div class="Itemcategory">
                  <ul class="itemcategory__parent">
                    <li class="parent__list">
                      <a href="#" class="itemcategory__parent--name">
                        ${parent.name}
                      </a>
                    </li>
                  </ul>
                </div>
                `
    return html;
  };
  $("#headerCategory").on('click', function() {
    
    let insertHTML = '';

    parents = $('.parents').val();
    $(function(parents) {
      parent = parents.find(1);
      console.log(parents.ids);
      
    });

    // $.each(parents, function(i, parent) {
    //   insertHTML += buildHTML(parent);
    // });
    // $("#headerCategory").append(insertHTML);
    // $.each(@parents, function(name, parent){
    //   console.log("parent.name");
    //   let html2 = parent.name;
    // });
    // $(".itemcategory__parent--name").append(html2);
  });

  $(function() {
            
    // 配列を変数に格納
    let arr = ['高崎','前橋','太田', '伊勢崎'];
  
    // each()に引数を指定してループ処理
    $.each(arr, function(i, val) {
  
      // コンソールに1つずつ出力
      console.log(i+':'+val);
  
      // 値が前橋の次から中断
      return (val != '前橋');
  
    });
  });

});

