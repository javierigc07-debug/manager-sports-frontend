export default {
  template: `
      <!-- Hero Section -->
      <section class="relative overflow-hidden">
        <div class="absolute inset-0" style="background: linear-gradient(135deg, #0F172A 0%, #1e3a5f 40%, #0e4f6e 70%, #0F172A 100%)"></div>
        <div class="absolute inset-0 opacity-10" style="background-image: url('https://images.unsplash.com/photo-1770479086965-430e49d96e23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwY3Jvd2QlMjBhZXJpYWx8ZW58MXx8fHwxNzc3NzY1MzkwfDA&ixlib=rb-4.1.0&q=80&w=1080'); background-size: cover; background-position: center;"></div>

        <div class="relative max-w-5xl mx-auto px-6 sm:px-10 pt-28 pb-36 text-center">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-[#06B6D4] px-4 py-1.5 rounded-full text-sm mb-8" style="font-weight: 600">
            <star class="w-3.5 h-3.5"></star>
            La plataforma lider en logistica deportiva
          </div>

          <h1 class="text-white mb-6" style="font-size: clamp(2.2rem, 5vw, 3.5rem); font-weight: 800; line-height: 1.15; letter-spacing: -0.03em;">
            Tu Acceso Facil y Seguro a Todos los Eventos Deportivos de
            <span style="color: #fffb00;">Ven</span><span style="color: #0091ff;">ezu</span><span style="color: #ff0000;">ela</span>
          </h1>

          <p class="text-slate-300 mb-14 max-w-2xl mx-auto" style="font-size: 1.125rem; line-height: 1.75">
            Registrate para comprar tus boletos y asegurar tu lugar en los mejores eventos deportivos del pais.
          </p>

          <!-- Glassmorphism Card -->
          <div class="inline-block rounded-3xl p-10 sm:p-14" style="background: rgba(255,255,255,0.07); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.15); box-shadow: 0 20px 60px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1);">
            <p class="text-slate-300 mb-6 text-sm" style="font-weight: 500">Unete al equipo de <span class="text-white" style="font-weight: 700">fanaticos</span> que ya usan Olympia</p>
            <router-link to="/register" class="group inline-flex items-center gap-3 text-white px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer" style="background: linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%); box-shadow: 0 6px 30px rgba(37,99,235,0.5); font-size: 1rem; font-weight: 700;">
              Registrarse ahora
              <arrow-right class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"></arrow-right>
            </router-link>
            <div class="flex items-center justify-center gap-6 mt-6">
              <div v-for="benefit in benefits" :key="benefit.label" class="flex items-center gap-1.5 text-slate-400 text-xs" style="font-weight: 500">
                <component :is="benefit.icon" class="w-3.5 h-3.5 text-[#06B6D4]" :stroke-width="2"></component>
                {{ benefit.label }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Quienes somos -->
      <section id="about" class="bg-white py-32 scroll-mt-20">
        <div class="max-w-6xl mx-auto px-6 sm:px-10">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span class="text-[#06B6D4] text-sm uppercase tracking-widest" style="font-weight: 700">Quienes somos</span>
              <h2 class="text-[#0F172A] mt-3 mb-6" style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.025em;">
                La plataforma deportiva de Venezuela
              </h2>
              <p class="text-slate-500 mb-5" style="line-height: 1.8">
                <strong class="text-[#0F172A]">Olympia</strong> es la plataforma venezolana dedicada a conectar a los fanaticos del deporte con los mejores eventos del pais. Nacimos con la mision de modernizar la forma en que los venezolanos viven el deporte, eliminando filas, intermediarios y complicaciones.
              </p>
              <p class="text-slate-500" style="line-height: 1.8">
                Desde beisbol hasta futbol, baloncesto y mas — gestionamos la logistica completa para que tu solo te preocupes de disfrutar. Nuestro equipo trabaja dia a dia para garantizar una experiencia segura, transparente y de primer nivel.
              </p>
              <div class="flex gap-6 mt-8">
                <div class="text-center">
                  <p class="text-[#2563EB] text-2xl" style="font-weight: 800">+500</p>
                  <p class="text-slate-500 text-xs mt-1" style="font-weight: 500">Eventos realizados</p>
                </div>
                <div class="text-center">
                  <p class="text-[#2563EB] text-2xl" style="font-weight: 800">+50K</p>
                  <p class="text-slate-500 text-xs mt-1" style="font-weight: 500">Usuarios registrados</p>
                </div>
                <div class="text-center">
                  <p class="text-[#2563EB] text-2xl" style="font-weight: 800">24 estados</p>
                  <p class="text-slate-500 text-xs mt-1" style="font-weight: 500">Cobertura nacional</p>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="val in values" :key="val.title" class="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style="background: #f8fafc; border: 1px solid #e2e8f0;">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style="background: rgba(37,99,235,0.08)">
                  <component :is="val.icon" class="w-5 h-5 text-[#2563EB]" :stroke-width="1.8"></component>
                </div>
                <h4 class="text-[#0F172A] text-sm mb-1" style="font-weight: 700">{{ val.title }}</h4>
                <p class="text-slate-500 text-xs" style="line-height: 1.6">{{ val.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Como funciona -->
      <section id="how-it-works" class="bg-white py-32 scroll-mt-20" style="border-top: 1px solid #f1f5f9;">
        <div class="max-w-6xl mx-auto px-6 sm:px-10">
          <div class="text-center mb-20">
            <span class="text-[#06B6D4] text-sm uppercase tracking-widest" style="font-weight: 700">
              Como funciona
            </span>
            <h2 class="text-[#0F172A] mt-3" style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.025em;">
              Tres pasos para tu proximo evento
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div class="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#2563EB] opacity-30" />
            <div
              v-for="(step, i) in steps"
              :key="step.title"
              class="group relative bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style="border: 1px solid #f1f5f9; box-shadow: 0 2px 20px rgba(15,23,42,0.05);"
            >
              <div class="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xs" style="background: linear-gradient(135deg, #2563EB, #06B6D4); color: white; font-weight: 800;">
                {{ i + 1 }}
              </div>
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 transition-colors duration-300 group-hover:bg-[#06B6D4]/20" style="background: rgba(6,182,212,0.08)">
                <component :is="step.icon" class="w-9 h-9 text-[#06B6D4]" :stroke-width="1.5" />
              </div>
              <h3 class="text-[#0F172A] mb-3" style="font-size: 1.1rem; font-weight: 700;">
                {{ step.title }}
              </h3>
              <p class="text-slate-500 leading-relaxed text-sm">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stats -->
      <section class="bg-[#0F172A] py-16">
        <div class="max-w-5xl mx-auto px-6 sm:px-10">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.label">
              <p class="text-white mb-1" style="font-size: 1.8rem; font-weight: 800; background: linear-gradient(90deg, #2563EB, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                {{ stat.value }}
              </p>
              <p class="text-slate-400 text-sm" style="font-weight: 500">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Eventos -->
      <section id="events" class="bg-white py-32 scroll-mt-20">
        <div class="max-w-6xl mx-auto px-6 sm:px-10">
          <div class="text-center mb-16">
            <span class="text-[#06B6D4] text-sm uppercase tracking-widest" style="font-weight: 700">Cartelera</span>
            <h2 class="text-[#0F172A] mt-3" style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.025em;">
              Eventos disponibles
            </h2>
            <p class="text-slate-500 mt-4 max-w-xl mx-auto text-sm" style="line-height: 1.75">
              Explora nuestra cartelera de eventos deportivos en todo el territorio nacional. Registrate para ver disponibilidad y precios en tiempo real.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div v-for="sport in sports" :key="sport.name" class="group rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" style="border: 1px solid #e2e8f0;">
              <div class="h-36 flex items-center justify-center" :style="{ background: sport.gradient }">
                <i :class="sport.emoji" style="font-size: 3.5rem; color: rgba(255,255,255,0.95); text-shadow: 0 4px 15px rgba(0,0,0,0.2);"></i>
              </div>
              <div class="p-5">
                <h4 class="text-[#0F172A] text-sm" style="font-weight: 700">{{ sport.name }}</h4>
                <p class="text-slate-500 text-xs" style="line-height: 1.6">{{ sport.desc }}</p>
              </div>
            </div>
          </div>
          <div class="text-center">
            <router-link to="/register" class="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105" style="background: linear-gradient(135deg, #2563EB, #06B6D4); font-size: 0.9rem; font-weight: 700; box-shadow: 0 4px 20px rgba(37,99,235,0.4);">
              Ver todos los eventos
              <arrow-right class="w-4 h-4"></arrow-right>
            </router-link>
          </div>
        </div>
      </section>

      <!-- Rankings y Estadisticas -->
      <section id="rankings" class="py-32 scroll-mt-20" style="background: linear-gradient(135deg, #0F172A 0%, #1e293b 100%);">
        <div class="max-w-6xl mx-auto px-6 sm:px-10">
          <div class="text-center mb-16">
            <span class="text-[#06B6D4] text-sm uppercase tracking-widest" style="font-weight: 700">Rankings y Estadisticas</span>
            <h2 class="text-white mt-3" style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.025em;">
              Datos en tiempo real
            </h2>
            <p class="text-slate-400 mt-4 max-w-xl mx-auto text-sm" style="line-height: 1.75">
              Olympia ofrece un panel de estadisticas completo para organizadores y fanaticos. Seguimiento de asistencia, ventas y rendimiento por evento.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="(feature, fi) in rankingFeatures" :key="feature.title" class="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center" style="background: linear-gradient(135deg, #2563EB, #06B6D4)">
                  <span style="font-size: 1rem; font-weight: 900; color: white;">{{ fi + 1 }}</span>
                </div>
                <div>
                  <h4 class="text-white text-sm mb-1" style="font-weight: 700">{{ feature.title }}</h4>
                  <p class="text-slate-400 text-xs" style="line-height: 1.6">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-12 rounded-2xl p-8 text-center" style="background: rgba(37,99,235,0.1); border: 1px solid rgba(37,99,235,0.3);">
            <p class="text-slate-300 text-sm mb-2" style="font-weight: 500">Eres organizador de eventos?</p>
            <p class="text-white mb-6" style="font-size: 1.1rem; font-weight: 700">Accede al panel administrativo completo</p>
            <router-link to="/login/admin" class="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-full text-sm transition-all duration-300 hover:scale-105" style="background: linear-gradient(135deg, #2563EB, #06B6D4); font-weight: 700;">
              Acceso Administrador
              <arrow-right class="w-3.5 h-3.5"></arrow-right>
            </router-link>
          </div>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="py-32" style="background: linear-gradient(135deg, #0F172A 0%, #1e3a5f 100%);">
        <div class="max-w-3xl mx-auto px-6 sm:px-10 text-center">
          <h2 class="text-white mb-4" style="font-size: clamp(1.6rem, 3vw, 2.25rem); font-weight: 800; letter-spacing: -0.025em;">
            Listo para vivir la experiencia?
          </h2>
          <p class="text-slate-300 mb-8 text-sm" style="line-height: 1.75">
            Crea tu cuenta gratis y empieza a disfrutar de los mejores eventos deportivos sin complicaciones.
          </p>
          <router-link to="/register" class="group inline-flex items-center gap-3 text-white px-12 py-4 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer" style="background: linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%); box-shadow: 0 6px 30px rgba(37,99,235,0.5); font-size: 1rem; font-weight: 700;">
            Registrarse ahora
            <arrow-right class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </router-link>
        </div>
      </section>
  `,
  data() {
    return {
      benefits: [
        { icon: 'shield', label: "Pago seguro" },
        { icon: 'logo-cyan', label: "Acceso instantaneo" },
        { icon: 'star-outlined', label: "Sin comisiones" }
      ],
      steps: [
        { icon: 'user', title: "Crea tu cuenta", desc: "Registrate en segundos y accede a una plataforma segura disenada para amantes del deporte." },
        { icon: 'calendar', title: "Selecciona tu evento", desc: "Explora una amplia cartelera de eventos deportivos y elige el que mas te apasione." },
        { icon: 'ticket', title: "Obtén tu entrada", desc: "Recibe tu boleto digital al instante en tu correo y asegura tu lugar en las gradas." },
      ],
      stats: [
        { value: "100%", label: "Trazabilidad de pagos" },
        { value: "Tiempo Real", label: "Control de asistencia" },
        { value: "Multi-deporte", label: "Metricas adaptables" },
        { value: "24/7", label: "Soporte" }
      ],
      values: [
        { icon: 'shield', title: "Seguridad total", desc: "Transacciones cifradas y datos protegidos en todo momento." },
        { icon: 'star', title: "Calidad premium", desc: "Seleccion curada de los mejores eventos deportivos del pais." },
        { icon: 'ticket', title: "Sin comisiones ocultas", desc: "El precio que ves es el precio que pagas. Sin sorpresas." },
        { icon: 'user', title: "Soporte humano", desc: "Un equipo real disponible para resolver tus dudas 24/7." }
      ],
      sports: [
        { name: "Beisbol",    emoji: "fa-solid fa-baseball", desc: "Temporada de la LVBP y torneos nacionales en los principales estadios del pais.", gradient: "linear-gradient(135deg, #1e3a5f, #2563EB)", badgeBg: "rgba(37,99,235,0.1)", badgeColor: "#2563EB" },
        { name: "Futbol",     emoji: "fa-solid fa-futbol", desc: "Liga Futve y Copa Venezuela. Sigue a tu equipo favorito en cada jornada.", gradient: "linear-gradient(135deg, #064e3b, #059669)", badgeBg: "rgba(5,150,105,0.1)", badgeColor: "#059669" },
        { name: "Baloncesto", emoji: "fa-solid fa-basketball", desc: "Superliga Nacional de Baloncesto. Los mejores equipos compitiendo en vivo.", gradient: "linear-gradient(135deg, #7c2d12, #ea580c)", badgeBg: "rgba(234,88,12,0.1)", badgeColor: "#ea580c" },
        { name: "Boxeo",      emoji: "fa-solid fa-hand-back-fist", desc: "Veladas de boxeo profesional con peleadores venezolanos de talla mundial.", gradient: "linear-gradient(135deg, #4c1d95, #7c3aed)", badgeBg: "rgba(124,58,237,0.1)", badgeColor: "#7c3aed" },
        { name: "Atletismo",  emoji: "fa-solid fa-person-running", desc: "Maratones, carreras urbanas y competencias nacionales de pista y campo.", gradient: "linear-gradient(135deg, #0e4f6e, #06B6D4)", badgeBg: "rgba(6,182,212,0.1)", badgeColor: "#06B6D4" },
        { name: "Natacion",   emoji: "fa-solid fa-person-swimming", desc: "Campeonatos nacionales e internacionales de natacion en Venezuela.", gradient: "linear-gradient(135deg, #1e3a5f, #0284c7)", badgeBg: "rgba(2,132,199,0.1)", badgeColor: "#0284c7" }
      ],
      rankingFeatures: [
        { title: "Dashboard en tiempo real", desc: "Visualiza asistencia, ventas de boletos y metricas de cada evento al instante desde el panel de control." },
        { title: "Rankings de eventos", desc: "Clasificacion de los eventos mas populares, con mayor asistencia y mejor valorados por los usuarios." },
        { title: "Tendencias deportivas", desc: "Descubre cuales deportes generan mayor interes por temporada y region en todo el territorio nacional." },
        { title: "Reportes de trazabilidad", desc: "Control completo de pagos, entradas emitidas y validaciones de acceso para organizadores." }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
