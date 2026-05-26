/* ══════════════════════════════════════════
   KEY CHET — JS COMPARTIDO v3
   ══════════════════════════════════════════ */

/* ── ÍCONOS ── */
const IC = {
  search:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  heart:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  heartFill:`<svg fill="currentColor" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  chat:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
  bookmark: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
  star:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  award:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>`,
  check:    `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
  download: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  lock:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  play:     `<svg fill="currentColor" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
  cart:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  bell:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,
  eye:      `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  user:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  users:    `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  settings: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
  logout:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  camera:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
  pdf:      `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
  gift:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  menu:     `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x:        `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  plus:     `<svg fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  instagram:`<svg fill="currentColor" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path fill="none" stroke="white" stroke-width="1.8" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`,
  needle:   `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"/><line x1="16" y1="8" x2="2" y2="22"/></svg>`,
  image:    `<svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`,
};

/* ══════════════════════════════════════════
   STORAGE — DATOS GLOBALES
   ══════════════════════════════════════════ */
const getUsuario  = () => { try{ return JSON.parse(localStorage.getItem('kc_user'))||null; }catch{return null;} };
const setUsuario  = u  => localStorage.setItem('kc_user', JSON.stringify(u));
const getUsuarios = () => { try{ return JSON.parse(localStorage.getItem('kc_usuarios'))||[]; }catch{return[];} };
const setUsuarios = u  => localStorage.setItem('kc_usuarios', JSON.stringify(u));
const getPosts    = () => { try{ return JSON.parse(localStorage.getItem('kc_posts'))||postsDefault(); }catch{return postsDefault();} };
const setPosts    = p  => localStorage.setItem('kc_posts', JSON.stringify(p));

/* ══════════════════════════════════════════
   STORAGE — DATOS POR USUARIO
   Prefijo con ID de usuario → cada persona
   tiene sus propios datos desde cero
   ══════════════════════════════════════════ */
const _uid = () => getUsuario()?.id || 'guest';

const getProgreso  = n  => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_prog_${n}`))||{completadas:[],actual:0}; }catch{return{completadas:[],actual:0};} };
const setProgreso  = (n,p)=> localStorage.setItem(`kc_${_uid()}_prog_${n}`, JSON.stringify(p));
const getUnlock    = n  => n==='basico'||localStorage.getItem(`kc_${_uid()}_unlock_${n}`)==='1';
const setUnlock    = n  => localStorage.setItem(`kc_${_uid()}_unlock_${n}`,'1');
const getPatrones  = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_patrones`))||[]; }catch{return[];} };
const setPatrones  = p  => localStorage.setItem(`kc_${_uid()}_patrones`, JSON.stringify(p));
const getInsignias = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_insignias`))||[]; }catch{return[];} };
const setInsignias = i  => localStorage.setItem(`kc_${_uid()}_insignias`, JSON.stringify(i));
const getCarrito   = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_carrito`))||[]; }catch{return[];} };
const setCarrito   = c  => localStorage.setItem(`kc_${_uid()}_carrito`, JSON.stringify(c));
const getFollowing = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_following`))||[]; }catch{return[];} };
const setFollowing = f  => localStorage.setItem(`kc_${_uid()}_following`, JSON.stringify(f));
const getNotifs    = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_notifs`))||[]; }catch{return[];} };
const setNotifs    = n  => localStorage.setItem(`kc_${_uid()}_notifs`, JSON.stringify(n));
const getSaved     = () => { try{ return JSON.parse(localStorage.getItem(`kc_${_uid()}_saved`))||[]; }catch{return[];} };
const setSaved     = s  => localStorage.setItem(`kc_${_uid()}_saved`, JSON.stringify(s));

/* ══════════════════════════════════════════
   NOTIFICACIONES
   ══════════════════════════════════════════ */
const NOTIF_ICONS = {
  badge:   '🏅',
  lesson:  '📚',
  like:    '❤️',
  comment: '💬',
  post:    '📸',
  unlock:  '🔓',
};

function addNotif(type, msg){
  if(!getUsuario()) return;
  const n = getNotifs();
  n.unshift({ id:Date.now(), type, msg, read:false,
    time: new Date().toLocaleTimeString('es-CO',{hour:'2-digit',minute:'2-digit'}) });
  if(n.length > 60) n.pop();
  setNotifs(n);
  actualizarNavNotifs();
}

function actualizarNavNotifs(){
  const unread = getNotifs().filter(n=>!n.read).length;
  document.querySelectorAll('.notif-badge').forEach(b=>{
    b.textContent = unread > 9 ? '9+' : unread;
    b.style.display = unread > 0 ? 'flex' : 'none';
  });
}

function toggleNotifs(){
  const drop = document.getElementById('notifDropdown');
  if(!drop) return;
  const isOpen = drop.classList.toggle('open');
  if(isOpen){
    renderNotifDropdown();
    // Mark all as read
    const n = getNotifs(); n.forEach(x=>x.read=true); setNotifs(n);
    actualizarNavNotifs();
  }
}

function renderNotifDropdown(){
  const drop = document.getElementById('notifDropdown');
  if(!drop) return;
  const notifs = getNotifs();
  if(notifs.length===0){
    drop.innerHTML=`<div style="padding:1.2rem;text-align:center;color:var(--gris-medio);font-family:var(--fu);font-size:.85rem">Sin notificaciones aún</div>`;
    return;
  }
  drop.innerHTML=notifs.slice(0,12).map(n=>`
    <div style="display:flex;align-items:flex-start;gap:10px;padding:.75rem 1rem;border-bottom:1px solid var(--gris-borde)">
      <span style="font-size:1.1rem;flex-shrink:0;margin-top:2px">${NOTIF_ICONS[n.type]||'🔔'}</span>
      <div style="flex:1"><p style="font-family:var(--fu);font-size:.82rem;color:var(--naranja);line-height:1.4">${n.msg}</p>
      <span style="font-size:.7rem;color:#bbb;font-family:var(--fu)">${n.time}</span></div>
    </div>`).join('');
}

/* ══════════════════════════════════════════
   POSTS DEFAULT
   ══════════════════════════════════════════ */
function postsDefault(){
  return [
    {id:1,usuario:'Valentina Ríos',  inicial:'V',color:'#e84a22',nivel:'basico',ig:'@valeri.crochet',
     img:'img/comunidad/relleno_001.png',titulo:'Mi primera pieza',
     desc:'No puedo creer que lo logré. Me tomó 3 horas pero quedó perfecta.',
     likes:24,comentarios:[],tiempo:'hace 2 horas',meGusta:false,savedBy:[]},
    {id:2,usuario:'Sofía Morales',   inicial:'S',color:'#AA1739',nivel:'intermedio',ig:'@sofi.tejidos',
     img:'img/comunidad/relleno_002.png',titulo:'Ranita con sombrerito',
     desc:'El nivel intermedio me enseñó tantísimo. Amo el resultado.',
     likes:41,comentarios:[],tiempo:'hace 5 horas',meGusta:false,savedBy:[]},
    {id:3,usuario:'Camila Herrera',  inicial:'C',color:'#4caf50',nivel:'basico',ig:'',
     img:'img/comunidad/relleno_003.png',titulo:'Gatito esponjoso',
     desc:'Primer amigurumi con hilo gordito. Me enganché al crochet.',
     likes:17,comentarios:[],tiempo:'hace 1 día',meGusta:false,savedBy:[]},
    {id:4,usuario:'Daniela Castro',  inicial:'D',color:'#AA1739',nivel:'avanzado',ig:'@dani.art.crochet',
     img:'img/comunidad/relleno_004.png',titulo:'Mi personaje terminado',
     desc:'Este proyecto me llevó 2 semanas pero valió cada puntada.',
     likes:63,comentarios:[],tiempo:'hace 2 días',meGusta:false,savedBy:[]},
    {id:5,usuario:'Andrea Peña',     inicial:'A',color:'#ff9800',nivel:'intermedio',ig:'@andreacreativa',
     img:'img/comunidad/relleno_005.png',titulo:'Pajaritos llavero',
     desc:'El patrón es clarísimo. Gracias comunidad.',
     likes:29,comentarios:[],tiempo:'hace 3 horas',meGusta:false,savedBy:[]},
    {id:6,usuario:'Laura Jiménez',   inicial:'L',color:'#2196f3',nivel:'basico',ig:'',
     img:'img/comunidad/relleno_006.png',titulo:'Primera publicación',
     desc:'Hola comunidad. Soy nueva en Key Chet. Qué espacio tan bonito.',
     likes:12,comentarios:[],tiempo:'hace 4 horas',meGusta:false,savedBy:[]},
    {id:7,usuario:'Mariana López',   inicial:'M',color:'#e84a22',nivel:'intermedio',ig:'@mariana.loops',
     img:'img/comunidad/relleno_007.png',titulo:'Mi dragoncito terminado',
     desc:'Tardé bastante pero quedó espectacular.',
     likes:55,comentarios:[],tiempo:'hace 6 horas',meGusta:false,savedBy:[]},
    {id:8,usuario:'Isabela Torres',  inicial:'I',color:'#00bcd4',nivel:'basico',ig:'',
     img:'img/comunidad/relleno_008.png',titulo:'Ranita amigurumi',
     desc:'Primera ranita completada. Los puntos son más fáciles de lo que pensaba.',
     likes:33,comentarios:[],tiempo:'hace 8 horas',meGusta:false,savedBy:[]},
  ];
}

/* ══════════════════════════════════════════
   TOAST
   ══════════════════════════════════════════ */
function toast(msg, tipo='ok'){
  let c=document.querySelector('.toast-container');
  if(!c){c=document.createElement('div');c.className='toast-container';document.body.appendChild(c);}
  const dot={ok:'#AA1739',err:'#e84a22',info:'#AA1739'};
  const t=document.createElement('div'); t.className=`toast ${tipo}`;
  t.innerHTML=`<span style="width:8px;height:8px;border-radius:50%;background:${dot[tipo]||dot.ok};flex-shrink:0;display:inline-block"></span> ${msg}`;
  c.appendChild(t); setTimeout(()=>t.remove(),3800);
}

/* ══════════════════════════════════════════
   AUTH
   ══════════════════════════════════════════ */
function loginSocial(proveedor){
  // Simula login social — en producción se conectaría con OAuth real
  cerrarLogin();
  const nombre=proveedor==='Google'?'Usuario Google':'Usuario Facebook';
  const fakeUser={nombre, email:`usuario@${proveedor.toLowerCase()}.com`, puntos:0, nivel:'basico'};
  setUsuario(fakeUser);
  actualizarNav();
  if(typeof onLoginSuccess==='function') onLoginSuccess();
  toast(`¡Bienvenida! Entraste con ${proveedor}.`,'ok');
}


const abrirLogin    = () => document.getElementById('modalLogin')?.classList.add('open');
const cerrarLogin   = () => document.getElementById('modalLogin')?.classList.remove('open');
const abrirRegistro = () => document.getElementById('modalRegistro')?.classList.add('open');
const cerrarRegistro= () => document.getElementById('modalRegistro')?.classList.remove('open');

function iniciarSesion(e){
  e.preventDefault();
  const email=document.getElementById('loginEmail').value.trim();
  const pass =document.getElementById('loginPass').value;
  const u=getUsuarios().find(u=>u.email===email&&u.pass===pass);
  if(u){
    setUsuario(u); cerrarLogin(); actualizarNav();
    toast(`Bienvenida, ${u.nombre.split(' ')[0]}.`,'ok');
    if(typeof onLoginSuccess==='function') onLoginSuccess();
  } else {
    toast('Correo o contraseña incorrectos.','err');
  }
}

function registrar(e){
  e.preventDefault();
  const nombre=document.getElementById('regNombre').value.trim();
  const email =document.getElementById('regEmail').value.trim();
  const pass  =document.getElementById('regPass').value;
  const lista=getUsuarios();
  if(lista.find(u=>u.email===email)){toast('Ya existe una cuenta con ese correo.','err');return;}
  const nuevo={id:Date.now(),nombre,email,pass,avatar:null,puntos:0,ig:'',bio:''};
  lista.push(nuevo); setUsuarios(lista); setUsuario(nuevo);
  cerrarRegistro(); actualizarNav();
  toast(`Bienvenida a Key Chet, ${nombre.split(' ')[0]}.`,'ok');
  addNotif('unlock','¡Bienvenida! Completa tu primera lección para ganar puntos.');
  if(typeof onLoginSuccess==='function') onLoginSuccess();
}

function cerrarSesion(){
  localStorage.removeItem('kc_user');
  actualizarNav();
  toast('Sesión cerrada.','info');
  window.location.href='index.html';
}

/* ══════════════════════════════════════════
   PUNTOS
   ══════════════════════════════════════════ */
function sumarPuntos(pts, motivo){
  const u=getUsuario(); if(!u) return;
  u.puntos=(u.puntos||0)+pts; setUsuario(u);
  // Update in list
  const lista=getUsuarios(); const idx=lista.findIndex(x=>x.id===u.id);
  if(idx!==-1){lista[idx]=u;setUsuarios(lista);}
  toast(`+${pts} puntos — ${motivo}`,'ok');
  addNotif('lesson',`Ganaste ${pts} puntos: ${motivo}`);
}

/* ══════════════════════════════════════════
   NAVBAR
   ══════════════════════════════════════════ */
function actualizarNav(){
  const u=getUsuario();
  document.querySelectorAll('.nav-sin-sesion').forEach(el=>el.style.display=u?'none':'flex');
  document.querySelectorAll('.nav-con-sesion').forEach(el=>el.style.display=u?'flex':'none');
  if(u){
    document.querySelectorAll('.nav-nombre').forEach(el=>el.textContent=u.nombre.split(' ')[0]);
    document.querySelectorAll('.nav-avatar-img').forEach(el=>{
      el.innerHTML=u.avatar?`<img src="${u.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`:`${u.nombre[0].toUpperCase()}`;
    });
  }
  // Cart badge
  const total=getCarrito().reduce((s,i)=>s+i.qty,0);
  document.querySelectorAll('.cart-badge').forEach(b=>{b.textContent=total;b.style.display=total>0?'flex':'none';});
  // Notif badge
  actualizarNavNotifs();
  // En móvil, ocultar nombre del chip
  const isMobile=window.innerWidth<=768;
  document.querySelectorAll('.nav-nombre').forEach(el=>el.style.display=isMobile?'none':'inline');
}

function buildNav(paginaActiva){
  const nav=document.getElementById('main-nav');
  if(!nav) return;
  const u=getUsuario();
  const carritoCnt=getCarrito().reduce((s,i)=>s+i.qty,0);
  const unread=getNotifs().filter(n=>!n.read).length;

  const links=[
    {href:'index.html',    label:'Inicio'},
    {href:'cursos.html',   label:'Cursos'},
    {href:'comunidad.html',label:'Comunidad'},
    {href:'compras.html',  label:'Compras'},
    {href:'ayuda.html',    label:'Ayuda'},
  ];

  nav.innerHTML=`
    <a href="index.html" class="nav-logo"><img src="img/logo.svg" alt="Key Chet"></a>

    <div class="nav-search">
      <span class="nav-search-icon">${IC.search}</span>
      <input type="text" id="navSearchInput" placeholder="Busca cursos, productos..." onkeydown="if(event.key==='Enter')handleSearch(this.value)" oninput="handleSearchInput(this.value)">
    </div>

    <!-- LINKS — van dentro del hamburger en móvil -->
    <ul class="nav-links" id="navMenu">
      ${links.map(l=>`<li><a href="${l.href}"${paginaActiva===l.label?' class="active"':''}>${l.label}</a></li>`).join('')}
    </ul>

    <!-- SIEMPRE VISIBLES — fuera del hamburger en móvil -->
    <div class="nav-always-visible">
      <!-- CARRITO -->
      <button class="nav-icon-btn" onclick="abrirCarritoNav()" title="Carrito" style="position:relative">
        <span style="width:22px;height:22px;display:flex;align-items:center;justify-content:center;color:var(--naranja)">${IC.cart}</span>
        <span class="cart-badge" style="position:absolute;top:-4px;right:-4px;background:var(--fucsia);color:white;border-radius:50%;width:17px;height:17px;font-size:.6rem;font-weight:800;display:${carritoCnt>0?'flex':'none'};align-items:center;justify-content:center;font-family:var(--fu)">${carritoCnt}</span>
      </button>

      <!-- NOTIFICACIONES -->
      <div style="position:relative">
        <button class="nav-icon-btn" onclick="toggleNotifs()" title="Notificaciones" style="position:relative">
          <span style="width:22px;height:22px;display:flex;align-items:center;justify-content:center;color:var(--naranja)">${IC.bell}</span>
          <span class="notif-badge" style="position:absolute;top:-4px;right:-4px;background:#e84a22;color:white;border-radius:50%;width:17px;height:17px;font-size:.6rem;font-weight:800;display:${unread>0?'flex':'none'};align-items:center;justify-content:center;font-family:var(--fu)">${unread>9?'9+':unread}</span>
        </button>
        <div id="notifDropdown" style="display:none;position:absolute;top:calc(100% + 8px);right:-20px;width:280px;background:white;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.15);border:2px solid var(--gris-borde);z-index:999;max-height:340px;overflow-y:auto"></div>
      </div>

      <!-- SIN SESIÓN -->
      <div class="nav-sin-sesion" style="display:${u?'none':'flex'};align-items:center">
        <a href="#" onclick="abrirLogin();return false;" class="btn-acceder">Entrar</a>
      </div>

      <!-- CON SESIÓN -->
      <div class="nav-con-sesion" style="display:${u?'flex':'none'};align-items:center">
        <a href="mis-proyectos.html" class="user-chip" title="Mi perfil">
          <div class="user-initial nav-avatar-img">${u?u.nombre[0].toUpperCase():'?'}</div>
          <span class="nav-nombre" style="display:none">${u?u.nombre.split(' ')[0]:''}</span>
        </a>
      </div>
    </div>

    <button class="nav-hamburger" id="navHamburger" onclick="toggleNavMenu()" aria-label="Menú">
      <span id="hamburgerIcon" style="width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:var(--naranja)">${IC.menu}</span>
    </button>`;

  // En desktop sí mostramos el nombre en el chip
  const updateChipName=()=>{
    const isMobile=window.innerWidth<=768;
    document.querySelectorAll('.nav-nombre').forEach(el=>el.style.display=isMobile?'none':'inline');
  };
  updateChipName();
  window.addEventListener('resize',updateChipName);

  // Cerrar dropdown al hacer clic fuera
  document.addEventListener('click', function(e){
    const drop=document.getElementById('notifDropdown');
    if(drop&&drop.style.display!=='none'&&!drop.contains(e.target)&&!e.target.closest('[onclick="toggleNotifs()"]')){
      drop.style.display='none'; drop.innerHTML='';
    }
  });

  document.querySelectorAll('.modal-overlay').forEach(m=>
    m.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');})
  );
}

/* Notif dropdown toggle */
const _orig_toggleNotifs = typeof toggleNotifs !== 'undefined' ? toggleNotifs : null;
function toggleNotifs(){
  const drop=document.getElementById('notifDropdown');
  if(!drop) return;
  const isOpen=drop.style.display!=='none'&&drop.innerHTML!=='';
  if(isOpen){ drop.style.display='none'; drop.innerHTML=''; return; }
  drop.style.display='block';
  renderNotifDropdown();
  const n=getNotifs(); n.forEach(x=>x.read=true); setNotifs(n);
  actualizarNavNotifs();
}

function toggleNavMenu(){
  const menu=document.getElementById('navMenu');
  const icon=document.getElementById('hamburgerIcon');
  if(!menu) return;
  const open=menu.classList.toggle('open');
  icon.innerHTML=open?IC.x:IC.menu;
}

/* ══════════════════════════════════════════
   BÚSQUEDA
   ══════════════════════════════════════════ */
function handleSearch(query){
  if(!query.trim()) return;
  const q=query.trim();
  if(typeof PAGE_TITLE!=='undefined'){
    if(PAGE_TITLE==='Compras'&&typeof filtrarBusqueda==='function'){ filtrarBusqueda(q.toLowerCase()); return; }
    if(PAGE_TITLE==='Comunidad'&&typeof filtrarBusqueda==='function'){ filtrarBusqueda(q.toLowerCase()); return; }
  }
  window.location.href=`buscar.html?q=${encodeURIComponent(q)}`;
}
function handleSearchInput(val){
  if(typeof PAGE_TITLE!=='undefined'){
    if(PAGE_TITLE==='Compras'&&typeof filtrarBusqueda==='function') filtrarBusqueda(val.toLowerCase());
    if(PAGE_TITLE==='Comunidad'&&typeof filtrarBusqueda==='function') filtrarBusqueda(val.toLowerCase());
  }
}

/* ══════════════════════════════════════════
   CARRITO MODAL (global)
   ══════════════════════════════════════════ */
function abrirCarritoNav(){
  const modal=document.getElementById('modalCarrito');
  if(!modal) { window.location.href='compras.html'; return; }
  renderCarritoModal(); modal.classList.add('open');
}

function renderCarritoModal(){
  const carrito=getCarrito();
  const cont=document.getElementById('carritoItems');
  const totalEl=document.getElementById('carritoTotal');
  if(!cont) return;
  if(carrito.length===0){
    cont.innerHTML=`<p style="text-align:center;padding:2rem;color:var(--gris-medio);font-family:var(--fu)">Tu carrito está vacío</p>`;
    if(totalEl) totalEl.textContent='$0'; return;
  }
  const total=carrito.reduce((s,i)=>s+i.precio*i.qty,0);
  cont.innerHTML=carrito.map(item=>`
    <div style="display:flex;align-items:center;gap:1rem;padding:.75rem 0;border-bottom:1px solid var(--gris-borde)">
      <div style="width:52px;height:52px;border-radius:10px;overflow:hidden;flex-shrink:0;background:var(--crema-suave);display:flex;align-items:center;justify-content:center">
        ${item.img?`<img src="${item.img}" style="width:100%;height:100%;object-fit:contain;padding:4px" onerror="this.style.display='none'">`:''}
      </div>
      <div style="flex:1"><div style="font-family:var(--ft);font-weight:700;font-size:.88rem;color:var(--naranja)">${item.nombre}</div>
      <div style="font-size:.8rem;color:var(--gris-medio);font-family:var(--fu)">$${(item.precio*item.qty).toLocaleString('es-CO')} × ${item.qty}</div></div>
      <button onclick="quitarCarritoItem(${item.id})" style="background:none;border:none;cursor:pointer;color:var(--gris-medio);width:20px;height:20px">${IC.x}</button>
    </div>`).join('');
  if(totalEl) totalEl.textContent='$'+total.toLocaleString('es-CO');
}

function quitarCarritoItem(id){ setCarrito(getCarrito().filter(i=>i.id!==id)); actualizarNav(); renderCarritoModal(); }

/* ══════════════════════════════════════════
   WHATSAPP — MENSAJES PREDETERMINADOS
   ══════════════════════════════════════════ */
const WA_NUM = '573005059796';

function wa(tipo, datos={}){
  const msgs = {
    // Compra de amigurumi
    amigurumi: `Hola, vi Key Chet y me interesa adquirir el amigurumi *${datos.nombre||''}* ($${datos.precio||''}). ¿Está disponible?`,
    // Compra de patrón PDF de venta
    patron_venta: `Hola, vi Key Chet y quiero comprar el *${datos.nombre||''}* ($${datos.precio||''}). ¿Cómo puedo pagar?`,
    // Descuento en siguiente nivel
    descuento_intermedio: `Hola, completé el Nivel Básico en Key Chet y obtuve un *10% de descuento* para el Nivel Intermedio. ¿Cómo lo aplico?`,
    descuento_avanzado: `Hola, completé el Nivel Intermedio en Key Chet y obtuve un *10% de descuento* para el Nivel Avanzado. ¿Cómo lo aplico?`,
    // Inscripción a nivel
    inscribir_intermedio: `Hola, quiero inscribirme al *Nivel Intermedio* de Key Chet. ¿Cómo puedo pagar los $25.000?`,
    inscribir_avanzado: `Hola, quiero inscribirme al *Nivel Avanzado* de Key Chet. ¿Cómo puedo pagar los $45.000?`,
    // Carrito (varios productos)
    carrito: `Hola, quiero hacer un pedido en Key Chet:\n${datos.items||''}\n*Total: $${datos.total||''}*\n¿Cómo puedo pagar?`,
    // General
    general: `Hola, tengo una pregunta sobre Key Chet. `,
    // Ayuda
    ayuda: `Hola, necesito ayuda con Key Chet. ${datos.pregunta||''}`,
  };
  const msg = msgs[tipo] || msgs.general;
  window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`);
}

function finalizarCompra(){
  const u=getUsuario();
  if(!u){ toast('Inicia sesión para finalizar tu compra.','err'); return; }
  const carrito=getCarrito();
  if(carrito.length===0){ toast('Tu carrito está vacío.','info'); return; }
  const items=carrito.map(i=>`• ${i.nombre} x${i.qty} = $${(i.precio*i.qty).toLocaleString('es-CO')}`).join('\n');
  const total=carrito.reduce((s,i)=>s+i.precio*i.qty,0).toLocaleString('es-CO');
  toast('Redirigiendo a WhatsApp para completar tu pedido...','info');
  setTimeout(()=>wa('carrito',{items,total}),600);
}

/* ══════════════════════════════════════════
   PASARELA DE PAGO
   ══════════════════════════════════════════ */

function finalizarCompra(){
  const u=getUsuario();
  if(!u){ toast('Inicia sesión para finalizar tu compra.','err'); abrirLogin(); return; }
  const carrito=getCarrito();
  if(carrito.length===0){ toast('Tu carrito está vacío.','info'); return; }

  // Cerrar modal carrito
  document.getElementById('modalCarrito')?.classList.remove('open');

  // Abrir pasarela
  abrirPasarela();
}

function abrirPasarela(){
  // Destruir modal anterior para que el total siempre sea el actual
  const viejo = document.getElementById('modalPasarela');
  if(viejo) viejo.remove();

  _inyectarPasarela();
  _mostrarPaso('resumen');
  document.getElementById('modalPasarela').classList.add('open');
}

function _inyectarPasarela(){
  const carrito=getCarrito();
  const total=carrito.reduce((s,i)=>s+i.precio*i.qty,0);
  const el=document.createElement('div');
  el.id='modalPasarela';
  el.className='modal-overlay';
  el.innerHTML=`
  <div class="modal" style="max-width:500px;padding:0;overflow:hidden;border-radius:24px">

    <!-- HEADER -->
    <div style="background:var(--naranja);padding:20px 28px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <p style="font-family:var(--fu);font-size:.72rem;font-weight:700;color:rgba(255,255,255,.7);text-transform:uppercase;letter-spacing:1px">Pago seguro</p>
        <h3 style="font-family:var(--ft);font-size:1.2rem;color:white;margin-top:2px" id="pTitle">Elige cómo pagar</h3>
      </div>
      <button onclick="document.getElementById('modalPasarela').classList.remove('open')"
        style="background:rgba(255,255,255,.2);border:none;border-radius:50%;width:34px;height:34px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:white;font-size:1.1rem;flex-shrink:0">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="width:16px;height:16px"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <!-- PASOS -->
    <div style="padding:24px 28px 28px">

      <!-- PASO 1: RESUMEN + MÉTODOS -->
      <div id="paso-resumen">
        <!-- Resumen de productos -->
        <div style="background:var(--crema-suave);border-radius:14px;padding:14px 16px;margin-bottom:20px;border:2px solid var(--gris-borde)">
          ${carrito.map(i=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:5px 0;font-family:var(--fu);font-size:.84rem">
              <span style="color:var(--gris-medio)">${i.nombre} <span style="color:#bbb">× ${i.qty}</span></span>
              <span style="color:var(--naranja);font-weight:700">$${(i.precio*i.qty).toLocaleString('es-CO')}</span>
            </div>`).join('')}
          <div style="border-top:2px solid var(--gris-borde);margin-top:10px;padding-top:10px;display:flex;justify-content:space-between;align-items:center">
            <span style="font-family:var(--ft);font-size:1rem;color:var(--naranja);font-weight:700">Total</span>
            <span style="font-family:var(--ft);font-size:1.4rem;color:var(--naranja);font-weight:700">$${total.toLocaleString('es-CO')}</span>
          </div>
        </div>
        <!-- Métodos -->
        <p style="font-family:var(--fu);font-size:.8rem;font-weight:700;color:var(--gris-medio);margin-bottom:12px;text-transform:uppercase;letter-spacing:.5px">Selecciona tu método de pago</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
          ${_metodoBtn('whatsapp','WhatsApp','#25d366','<svg viewBox="0 0 24 24" fill="white" style="width:22px;height:22px"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>')}
          ${_metodoBtn('mercadopago','Mercado Pago','#009EE3','<svg viewBox="0 0 24 24" fill="white" style="width:22px;height:22px"><rect x="2" y="5" width="20" height="14" rx="3"/><path stroke="#009EE3" stroke-width="1.5" d="M2 10h20"/></svg>')}
          ${_metodoBtn('pse','PSE','#AA1739','<svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="width:22px;height:22px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>')}
          ${_metodoBtn('efecty','Efecty','#FFD000','<svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" style="width:22px;height:22px"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>')}
        </div>
      </div>

      <!-- PASO 2A: MERCADO PAGO -->
      <div id="paso-mercadopago" style="display:none">
        <button onclick="_mostrarPaso('resumen')" style="background:none;border:none;color:var(--gris-medio);font-family:var(--fu);font-size:.82rem;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:5px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><polyline points="15 18 9 12 15 6"/></svg> Volver
        </button>
        <div style="background:#009EE3;border-radius:14px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
          <svg viewBox="0 0 24 24" fill="white" style="width:28px;height:28px"><rect x="2" y="5" width="20" height="14" rx="3"/></svg>
          <div><p style="font-family:var(--ft);font-size:.95rem;color:white;font-weight:700">Mercado Pago</p><p style="font-family:var(--fu);font-size:.72rem;color:rgba(255,255,255,.75)">Pago seguro con tarjeta</p></div>
        </div>
        <div style="margin-bottom:14px">
          <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Número de tarjeta</label>
          <input id="mpCard" type="text" maxlength="19" placeholder="0000 0000 0000 0000" oninput="this.value=this.value.replace(/\D/g,'').replace(/(.{4})/g,'$1 ').trim()"
            style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.95rem;color:var(--naranja);letter-spacing:2px;outline:none" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
          <div>
            <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Vencimiento</label>
            <input id="mpExp" type="text" maxlength="5" placeholder="MM/AA" oninput="let v=this.value.replace(/\D/g,'');this.value=v.length>2?v.slice(0,2)+'/'+v.slice(2):v"
              style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.95rem;color:var(--naranja);outline:none" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
          </div>
          <div>
            <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">CVV</label>
            <input id="mpCvv" type="text" maxlength="3" placeholder="123" oninput="this.value=this.value.replace(/\D/g,'')"
              style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.95rem;color:var(--naranja);outline:none" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
          </div>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Nombre en la tarjeta</label>
          <input id="mpNombre" type="text" placeholder="Como aparece en la tarjeta"
            style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.95rem;color:var(--naranja);outline:none" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
        </div>
        <button onclick="_procesarPago('Mercado Pago')" style="width:100%;background:#009EE3;color:white;border:none;padding:14px;border-radius:999px;font-family:var(--fu);font-size:.95rem;font-weight:700;cursor:pointer;transition:var(--trans)" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
          Pagar $${total.toLocaleString('es-CO')}
        </button>
        <p style="font-family:var(--fu);font-size:.72rem;color:#bbb;text-align:center;margin-top:10px;display:flex;align-items:center;justify-content:center;gap:4px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:12px;height:12px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          Pago 100% seguro y encriptado
        </p>
      </div>

      <!-- PASO 2B: PSE -->
      <div id="paso-pse" style="display:none">
        <button onclick="_mostrarPaso('resumen')" style="background:none;border:none;color:var(--gris-medio);font-family:var(--fu);font-size:.82rem;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:5px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><polyline points="15 18 9 12 15 6"/></svg> Volver
        </button>
        <div style="background:#AA1739;border-radius:14px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
          <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="width:28px;height:28px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          <div><p style="font-family:var(--ft);font-size:.95rem;color:white;font-weight:700">PSE — Pagos en línea</p><p style="font-family:var(--fu);font-size:.72rem;color:rgba(255,255,255,.75)">Débito desde tu cuenta bancaria</p></div>
        </div>
        <div style="margin-bottom:14px">
          <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Banco</label>
          <select id="pseBank" style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.9rem;color:var(--naranja);outline:none;cursor:pointer" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
            <option value="">Selecciona tu banco</option>
            <option>Bancolombia</option><option>Banco de Bogotá</option><option>Davivienda</option>
            <option>BBVA Colombia</option><option>Banco Popular</option><option>Banco Agrario</option>
            <option>Nequi</option><option>Daviplata</option><option>Scotiabank Colpatria</option>
            <option>Banco de Occidente</option><option>Banco Caja Social</option><option>Itaú Colombia</option>
          </select>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:14px">
          <div>
            <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Tipo de persona</label>
            <select id="pseTipo" style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.9rem;color:var(--naranja);outline:none;cursor:pointer" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
              <option>Natural</option><option>Jurídica</option>
            </select>
          </div>
          <div>
            <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Tipo de documento</label>
            <select id="pseTipoDoc" style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.9rem;color:var(--naranja);outline:none;cursor:pointer" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
              <option>Cédula de ciudadanía</option><option>Cédula de extranjería</option><option>Pasaporte</option><option>NIT</option>
            </select>
          </div>
        </div>
        <div style="margin-bottom:20px">
          <label style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:var(--naranja);display:block;margin-bottom:5px">Número de documento</label>
          <input id="pseDoc" type="text" placeholder="Ej: 1234567890" oninput="this.value=this.value.replace(/\D/g,'')"
            style="width:100%;padding:11px 14px;border:2px solid var(--gris-borde);border-radius:12px;font-family:var(--fu);font-size:.95rem;color:var(--naranja);outline:none" onfocus="this.style.borderColor='var(--naranja)'" onblur="this.style.borderColor='var(--gris-borde)'">
        </div>
        <button onclick="_procesarPago('PSE')" style="width:100%;background:#AA1739;color:white;border:none;padding:14px;border-radius:999px;font-family:var(--fu);font-size:.95rem;font-weight:700;cursor:pointer;transition:var(--trans)" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
          Continuar con PSE
        </button>
      </div>

      <!-- PASO 2C: EFECTY -->
      <div id="paso-efecty" style="display:none">
        <button onclick="_mostrarPaso('resumen')" style="background:none;border:none;color:var(--gris-medio);font-family:var(--fu);font-size:.82rem;cursor:pointer;margin-bottom:16px;display:flex;align-items:center;gap:5px">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><polyline points="15 18 9 12 15 6"/></svg> Volver
        </button>
        <div style="background:#FFD000;border-radius:14px;padding:14px 18px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
          <svg viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" style="width:28px;height:28px"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          <div><p style="font-family:var(--ft);font-size:.95rem;color:#333;font-weight:700">Efecty</p><p style="font-family:var(--fu);font-size:.72rem;color:#555">Pago en efectivo en cualquier punto</p></div>
        </div>
        <div style="background:var(--crema-suave);border:2px solid var(--crema-oscuro);border-radius:16px;padding:20px;text-align:center;margin-bottom:20px">
          <p style="font-family:var(--fu);font-size:.78rem;color:var(--gris-medio);margin-bottom:6px">Tu referencia de pago</p>
          <p style="font-family:var(--ft);font-size:2rem;font-weight:700;color:var(--naranja);letter-spacing:4px" id="efectyRef"></p>
          <p style="font-family:var(--ft);font-size:1.3rem;font-weight:700;color:var(--naranja);margin-top:6px">$${total.toLocaleString('es-CO')}</p>
          <button onclick="_copiarReferencia()" style="margin-top:12px;background:white;border:2px solid var(--naranja);color:var(--naranja);padding:7px 18px;border-radius:999px;font-family:var(--fu);font-size:.8rem;font-weight:700;cursor:pointer;transition:var(--trans)" onmouseover="this.style.background='var(--naranja)';this.style.color='white'" onmouseout="this.style.background='white';this.style.color='var(--naranja)'" id="btnCopiarRef">
            Copiar referencia
          </button>
        </div>
        <div style="background:white;border:2px solid var(--gris-borde);border-radius:14px;padding:16px;margin-bottom:20px">
          <p style="font-family:var(--ft);font-size:.9rem;color:var(--naranja);font-weight:700;margin-bottom:10px">Instrucciones de pago</p>
          <div style="font-family:var(--fu);font-size:.82rem;color:var(--gris-medio);line-height:1.7">
            <p>1. Dirígete a cualquier punto Efecty en Colombia.</p>
            <p>2. Indica al cajero que deseas hacer un pago de servicios.</p>
            <p>3. Menciona la referencia de pago de arriba.</p>
            <p>4. Paga el monto exacto en efectivo.</p>
            <p>5. Guarda el comprobante y envíanos la foto por WhatsApp.</p>
          </div>
        </div>
        <button onclick="_procesarPago('Efecty')" style="width:100%;background:#FFD000;color:#333;border:none;padding:14px;border-radius:999px;font-family:var(--fu);font-size:.95rem;font-weight:700;cursor:pointer;transition:var(--trans)" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='none'">
          Ya realicé el pago
        </button>
      </div>

      <!-- PASO 2D: WHATSAPP -->
      <div id="paso-whatsapp" style="display:none">
        <!-- Se procesa directo, no tiene pantalla propia -->
      </div>

      <!-- PASO 3: CONFIRMACIÓN -->
      <div id="paso-confirmacion" style="display:none;text-align:center;padding:20px 0">
        <div style="width:80px;height:80px;border-radius:50%;background:rgba(215,10,72,.08);display:flex;align-items:center;justify-content:center;margin:0 auto 20px;animation:_popIn .4s cubic-bezier(0.34,1.56,0.64,1)">
          <svg viewBox="0 0 24 24" fill="none" stroke="#AA1739" stroke-width="2.5" style="width:40px;height:40px"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h3 style="font-family:var(--ft);font-size:1.5rem;color:var(--naranja);margin-bottom:6px">¡Pago recibido!</h3>
        <p style="font-family:var(--fu);font-size:.88rem;color:var(--gris-medio);margin-bottom:20px">Gracias por tu compra en Key Chet</p>
        <div style="background:var(--crema-suave);border-radius:16px;padding:16px;border:2px solid var(--crema-oscuro);margin-bottom:20px;text-align:left">
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-family:var(--fu);font-size:.8rem;color:var(--gris-medio)">Número de orden</span>
            <span style="font-family:var(--ft);font-size:.9rem;font-weight:700;color:var(--naranja)" id="numOrden"></span>
          </div>
          <div style="display:flex;justify-content:space-between;margin-bottom:6px">
            <span style="font-family:var(--fu);font-size:.8rem;color:var(--gris-medio)">Método de pago</span>
            <span style="font-family:var(--fu);font-size:.8rem;font-weight:700;color:var(--naranja)" id="metodoUsado"></span>
          </div>
          <div style="display:flex;justify-content:space-between">
            <span style="font-family:var(--fu);font-size:.8rem;color:var(--gris-medio)">Total pagado</span>
            <span style="font-family:var(--ft);font-size:.9rem;font-weight:700;color:var(--naranja)" id="totalPagado"></span>
          </div>
        </div>
        <p style="font-family:var(--fu);font-size:.8rem;color:var(--gris-medio);margin-bottom:20px">Nos pondremos en contacto pronto para coordinar la entrega. También puedes escribirnos por WhatsApp.</p>
        <button onclick="document.getElementById('modalPasarela').classList.remove('open');setCarrito([]||[]);actualizarNav()" style="width:100%;background:var(--naranja);color:white;border:none;padding:13px;border-radius:999px;font-family:var(--fu);font-size:.92rem;font-weight:700;cursor:pointer">
          Volver a la tienda
        </button>
      </div>

    </div>
  </div>
  <style>
    @keyframes _popIn{0%{transform:scale(0)}70%{transform:scale(1.15)}100%{transform:scale(1)}}
    @keyframes _spin{to{transform:rotate(360deg)}}
  </style>`;

  el.addEventListener('click', e=>{ if(e.target===el) el.classList.remove('open'); });
  document.body.appendChild(el);

  // Generar referencia Efecty
  const ref = Math.floor(Math.random()*9000000+1000000).toString();
  const refEl = document.getElementById('efectyRef');
  if(refEl) refEl.textContent = ref;
  el._efectyRef = ref;
}

function _metodoBtn(id, nombre, color, icono){
  const textColor = id==='efecty' ? '#333' : 'white';
  return `<button onclick="_elegirMetodo('${id}')"
    style="background:${color};border:none;border-radius:16px;padding:16px 12px;cursor:pointer;display:flex;flex-direction:column;align-items:center;gap:8px;transition:all .2s;width:100%"
    onmouseover="this.style.transform='translateY(-3px)';this.style.boxShadow='0 8px 20px rgba(0,0,0,0.15)'"
    onmouseout="this.style.transform='none';this.style.boxShadow='none'">
    ${icono}
    <span style="font-family:var(--fu);font-size:.78rem;font-weight:700;color:${textColor};line-height:1.2;text-align:center">${nombre}</span>
  </button>`;
}

function _mostrarPaso(paso){
  ['resumen','mercadopago','pse','efecty','whatsapp','confirmacion'].forEach(p=>{
    const el=document.getElementById('paso-'+p);
    if(el) el.style.display = p===paso ? 'block' : 'none';
  });
  const titles = {
    resumen:'Elige cómo pagar',
    mercadopago:'Pago con tarjeta',
    pse:'PSE — Débito bancario',
    efecty:'Pago en efectivo',
    confirmacion:'¡Compra exitosa!'
  };
  const t=document.getElementById('pTitle');
  if(t) t.textContent = titles[paso]||'Pago seguro';
}

function _elegirMetodo(metodo){
  if(metodo==='whatsapp'){
    const carrito=getCarrito();
    const items=carrito.map(i=>`• ${i.nombre} x${i.qty} = $${(i.precio*i.qty).toLocaleString('es-CO')}`).join('\n');
    const total=carrito.reduce((s,i)=>s+i.precio*i.qty,0).toLocaleString('es-CO');
    document.getElementById('modalPasarela').classList.remove('open');
    setTimeout(()=>wa('carrito',{items,total}),300);
    return;
  }
  _mostrarPaso(metodo);
}

function _procesarPago(metodoNombre){
  const total=getCarrito().reduce((s,i)=>s+i.precio*i.qty,0);
  const orden='KC-'+Date.now().toString().slice(-6);

  // Simular carga
  const btn=event.currentTarget;
  const textoOriginal=btn.textContent;
  btn.disabled=true;
  btn.innerHTML=`<span style="display:inline-block;width:18px;height:18px;border:3px solid rgba(255,255,255,.3);border-top-color:white;border-radius:50%;animation:_spin .7s linear infinite"></span>`;

  setTimeout(()=>{
    btn.disabled=false;
    btn.textContent=textoOriginal;
    // Mostrar confirmación
    document.getElementById('numOrden').textContent = orden;
    document.getElementById('metodoUsado').textContent = metodoNombre;
    document.getElementById('totalPagado').textContent = '$'+total.toLocaleString('es-CO');
    _mostrarPaso('confirmacion');
    setCarrito([]);
    actualizarNav();
    toast('¡Pago procesado con éxito!','ok');
  }, 2200);
}

function _copiarReferencia(){
  const ref=document.getElementById('efectyRef')?.textContent||'';
  navigator.clipboard?.writeText(ref).then(()=>{
    const btn=document.getElementById('btnCopiarRef');
    if(btn){ btn.textContent='¡Copiado!'; setTimeout(()=>btn.textContent='Copiar referencia',2000); }
  }).catch(()=>toast('Referencia: '+ref,'info'));
}


let _demoActivo = false;
const isDemoOn = () => _demoActivo;

function toggleDemo(){
  _demoActivo = !_demoActivo;
  const btn = document.getElementById('btnDemo');
  if(btn){
    btn.classList.toggle('on', _demoActivo);
    btn.title = _demoActivo ? 'Desactivar vista previa' : 'Activar vista previa';
    btn.style.background = _demoActivo ? 'var(--fucsia)' : '';
    btn.style.borderColor = _demoActivo ? 'var(--fucsia)' : '';
    btn.style.color = _demoActivo ? 'white' : '';
  }
  // Re-renderizar niveles en cursos
  if(typeof renderNiveles === 'function') renderNiveles();
  if(typeof render === 'function') render();
  if(_demoActivo) toast('Vista previa activada — todos los niveles desbloqueados.','ok');
  else toast('Vista previa desactivada.','info');
}

/* ══════════════════════════════════════════
   WHATSAPP
   ══════════════════════════════════════════ */
function addWhatsapp(){
  if(document.querySelector('.wa-float')) return;
  const a=document.createElement('a');
  a.href='https://wa.me/573005059796'; a.target='_blank'; a.className='wa-float'; a.title='¿Necesitas ayuda?';
  a.innerHTML=`
    <svg viewBox="0 0 24 24" style="width:22px;height:22px;fill:white;flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
    <span style="font-family:'Nunito',sans-serif;font-size:.82rem;font-weight:800;color:white">¿Necesitas ayuda?</span>`;
  a.style.cssText='display:flex;align-items:center;gap:8px;padding:10px 18px;border-radius:999px;';
  document.body.appendChild(a);
}

/* ══════════════════════════════════════════
   FADE UP
   ══════════════════════════════════════════ */
function initFadeUp(){
  const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});},{threshold:0.06});
  document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el));
  return obs;
}

/* ══════════════════════════════════════════
   INIT
   ══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  buildNav(typeof PAGE_TITLE!=='undefined'?PAGE_TITLE:'');
  addWhatsapp();
  actualizarNav();
  initFadeUp();
  // Handle URL search param
  const urlQ=new URLSearchParams(window.location.search).get('q');
  if(urlQ){
    const inp=document.getElementById('navSearchInput');
    if(inp) inp.value=urlQ;
    setTimeout(()=>handleSearchInput(urlQ),300);
  }
});
