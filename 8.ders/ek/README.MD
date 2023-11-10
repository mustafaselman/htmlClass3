# CSS_POSITION
- static
- relative
- fixed
- absolute
- sticky

## static (default) (yer işgal eder)

- top,bottom gibi özellikler kullanılamaz
- normal akışa göre sıralanır

## relative (yer işgal eder)

- normal pozisyonunda konumlandırılmıştır.
- normal pozisyonundan diğer elementler etkilenmeyecek şekilde konumlandırılır. Yani kaydırılsa dahi o yeri tutmaya devam eder,boşluk bırakır.

## fixed (yer işgal etmez)

- sayfa aşağı çekilse dahi aynı yerde konumlandırılır.
- sayfada boşluk bırakmaz.

## absolute (yer işgal etmez)

- en yakın ataya göre konum alır. ata yoksa body'ye göre konumlanır.

- normal akıştan çıkar.üst üste binebilir.

- yer işgal etmez ama default konumu static olarak normal akışta nerdeyse ordadır.

## sticky (yer işgal eder)

- kullanıcının kaydırma pozisyonuna göre konumlanır.

- belli bir pozisyona kadar relative sonra fixed olarak davranır.