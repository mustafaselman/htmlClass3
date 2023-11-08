# CSS_FONTS

## Absolute Size 

- Metni belirtilen bir boyuta ayarlar
- Bir kullanıcının tüm tarayıcılarda metin boyutunu değiştirmesine izin vermez (erişilebilirlik nedenleriyle kötüdür) 
- Mutlak boyut, çıktının fiziksel boyutu bilindiğinde kullanışlıdır. 
(örn:px)

## Relative Size 

- Çevreleyen öğelere göre boyutu ayarlar 
- Bir kullanıcının tarayıcılarda metin boyutunu değiştirmesine izin verir
(örn:em,rem,%,vw,vh)

### em
- em body font-size değerine çalışır. Eğer kapsayıcı öğesinin bir font-size değeri var ise onu baz alacaktır. 
- body etiketinde font-size tanımlı değil ise tarayıcılar otomatik olarak bu değeri 16px olarak kabul eder ve 1em = 16px olur. h1{font-size:2em} = 32px

### rem

- rem birimi sadece html öğesinin font-size ölçüsünü baz almaktadır. html{font-size:16px;} ise 1rem = 16px olacaktır.

### %

- En yakın kapsayıcısının font-size değerine göre hesaplanır. html{font-size: 75%;} ise 1rem = 16*.75 = 12px olacaktır.

### vw

- Görüntü alanı genişliğine göre font-size değeri değişiklik göstermektedir. 1vw değeri görünüm penceresinin genişliğinin 1/ 100'üne eşittir. Örneğin, tarayıcının genişliği 1000 piksel ise 1vw 10 piksele eşit olacaktır.

### vh

- Görüntü alanı yüksekliğine göre font-size değeri değişiklik göstermektedir. 1vh değeri görünüm penceresinin yüksekliğinin 1/ 100'üne eşittir. Örneğin, tarayıcının yüksekliği 768 piksel ise 1vh 7.68 piksele eşit olacaktır.
