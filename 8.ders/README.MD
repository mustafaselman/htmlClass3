# CSS PSEUDO-CLASS

Bir elemanın özel durumunu tanımlamak için sözde sınıf (pseudo-class) kullanılır.

selector:pseudo-class {
  property: value;
}

- Bir kullanıcı fareyi üzerine getirdiğinde bir öğeye stil verin 
- Ziyaret edilen ve ziyaret edilmeyen bağlantıların stilini farklı şekilde belirleyin 
- Bir öğeye odaklanıldığında stil verin

ikiye ayırlır

## state (durum belirten yalancı classlar)
a:link(unvisited link),
a:visited(visited link),
a:hover(mouse over link),
a:active(selected link)

## position/other (konum belirten yabancı classlar)

div:first-child,
div:last-child,
div:nth-child(odd(tek),even(çift),2,3)
a:not(.c)