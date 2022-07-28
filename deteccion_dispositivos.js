const d = document,
  n = navigator,
  ua = n.userAgent;
export default function userDiveceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      edge: () => ua.match(/edge|edg/i),
      safari: () => ua.match(/safari/i),
      chrome: () => ua.match(/chrome/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie,iemobile/i),
      firefox: () => ua.match(/firefox/i),
      any: function () {
        return (
          this.edge() ||
          this.chrome() ||
          this.firefox() ||
          this.ie() ||
          this.opera() ||
          this.safari()
        );
      }
    };

  // console.log(ua);
  // console.log(isMobile.android());
  // console.log(isMobile.ios());
  // console.log(isDesktop.windows());
  // console.log(isBrowser.any());

  $id.innerHTML = `<ul>
        <li>User Agent: <b>${ua}</b></li>
        <li>Plataforma: <b>${isMobile.any() ? isMobile.any(): isDesktop.any()}</b></li>
        <li>Navegador: <b>${isBrowser.any()}</b></li>
    </ul>`;
if(isBrowser.edge()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en navegadores Edge</mark></p>`
}

if(isMobile.android()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en dispositivos Android</mark></p>`
}
if(isMobile.ios()){
    $id.innerHTML+=`<p><mark>Este contenido solo se ve en dispositivos IOS</mark></p>`
}

}
