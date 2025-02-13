// service-worker.js

// Cache version
const CACHE_NAME = 'release-v2';

// Files to cache
const CACHE_ASSETS = [
  '/gym-app-ai/common/workout.css',
  '/gym-app-ai/common/manifest.json',
  '/gym-app-ai/common/index.js',
  '/gym-app-ai/common/icon-192x192.png',
  '/gym-app-ai/common/icon-512x512.png',
  '/gym-app-ai/ex.js',
  '/gym-app-ai/index.html',
  '/gym-app-ai/videos/squat',
  '/gym-app-ai/videos/rdl',
  '/gym-app-ai/videos/walking_lounge',
  '/gym-app-ai/videos/seated_leg_curl',
  '/gym-app-ai/videos/adductor_machine',
  '/gym-app-ai/videos/abductor_machine',
  '/gym-app-ai/videos/hip_thrusts',
  '/gym-app-ai/videos/leg_toe_press',
  '/gym-app-ai/videos/decline_crunches',
  '/gym-app-ai/videos/hanging_leg_raise',
  '/gym-app-ai/videos/butterfly_kicks',
  '/gym-app-ai/videos/russian_twists',
  '/gym-app-ai/videos/plank',
  '/gym-app-ai/videos/deadlift',
  '/gym-app-ai/videos/leg_press',
  '/gym-app-ai/videos/slow_eccentric_leg_extentions',
  '/gym-app-ai/videos/seated_calf_raise',
  '/gym-app-ai/videos/tibialis_raise',
  '/gym-app-ai/videos/kickbacks',
  '/gym-app-ai/videos/barbell_glute_bridge',
  '/gym-app-ai/videos/hyperextentions',
  '/gym-app-ai/videos/roman_chair_leg_raises',
  '/gym-app-ai/videos/crunches',
  '/gym-app-ai/videos/dish_and_tucks',
  '/gym-app-ai/videos/bicycle_crunches',
  '/gym-app-ai/videos/lat_pulldown',
  '/gym-app-ai/videos/omni_grip_chest_supported_rows',
  '/gym-app-ai/videos/omni_directional_face_pull',
  '/gym-app-ai/videos/ez_bar_bicep_curl',
  '/gym-app-ai/videos/db_preacher_curl',
  '/gym-app-ai/videos/seated_rows',
  '/gym-app-ai/videos/wrist_extentions',
  '/gym-app-ai/videos/db_pullover',
  '/gym-app-ai/videos/1_arm_half_kneeling_let_pulldown',
  '/gym-app-ai/videos/pull_ups',
  '/gym-app-ai/videos/db_rows',
  '/gym-app-ai/videos/barbell_shrug_ins',
  '/gym-app-ai/videos/reverse_pec_deck',
  '/gym-app-ai/videos/overhead_cable_bicep_curl',
  '/gym-app-ai/videos/wrist_curls',
  '/gym-app-ai/videos/standing_arnold_press',
  '/gym-app-ai/videos/cross_body_y_raise',
  '/gym-app-ai/videos/pressdown+overhead_ext',
  '/gym-app-ai/videos/cross_body_tricep_ext',
  '/gym-app-ai/videos/bench_press',
  '/gym-app-ai/videos/larsen_press',
  '/gym-app-ai/videos/pec_deck',
  '/gym-app-ai/videos/bent_over_cable_fly',
  '/gym-app-ai/videos/machine_shoulder_press',
  '/gym-app-ai/videos/cable_bar_reverse_grip_pushdown',
  '/gym-app-ai/videos/machine_lateral_raise',
  '/gym-app-ai/videos/plate_front_raise',
  '/gym-app-ai/videos/incline_bench_press',
  '/gym-app-ai/videos/cable_lateral_raise',
  '/gym-app-ai/videos/hammer_grip_preacher_curl',
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching files...');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', event => {
  // Remove old caches
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Clearing old cache...');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch event
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
