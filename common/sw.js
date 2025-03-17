// service-worker.js

// Cache version
const CACHE_NAME = 'test-beta-1.5';

// Files to cache
const CACHE_ASSETS = [
  '/gym-app-ai/common/workout.css',
  '/gym-app-ai/common/manifest.json',
  '/gym-app-ai/common/index.js',
  '/gym-app-ai/common/icon-192x192.png',
  '/gym-app-ai/common/icon-512x512.png',
  '/gym-app-ai/ex.js',
  '/gym-app-ai/index.html',
  '/gym-app-ai/videos/arm_circles.mp4',
  '/gym-app-ai/videos/squat.mp4',
  '/gym-app-ai/videos/rdl.mp4',
  '/gym-app-ai/videos/walking_lounge.mp4',
  '/gym-app-ai/videos/seated_leg_curl.mp4',
  '/gym-app-ai/videos/adductor_machine.mp4',
  '/gym-app-ai/videos/abductor_machine.mp4',
  '/gym-app-ai/videos/hip_thrusts.mp4',
  '/gym-app-ai/videos/leg_toe_press.mp4',
  '/gym-app-ai/videos/decline_crunches.mp4',
  '/gym-app-ai/videos/hanging_leg_raise.mp4',
  '/gym-app-ai/videos/butterfly_kicks.mp4',
  '/gym-app-ai/videos/russian_twists.mp4',
  '/gym-app-ai/videos/plank.mp4',
  '/gym-app-ai/videos/deadlift.mp4',
  '/gym-app-ai/videos/leg_press.mp4',
  '/gym-app-ai/videos/slow_eccentric_leg_extentions.mp4',
  '/gym-app-ai/videos/seated_calf_raise.mp4',
  '/gym-app-ai/videos/tibialis_raise.mp4',
  '/gym-app-ai/videos/kickbacks.mp4',
  '/gym-app-ai/videos/barbell_glute_bridge.mp4',
  '/gym-app-ai/videos/hyperextentions.mp4',
  '/gym-app-ai/videos/roman_chair_leg_raises.mp4',
  '/gym-app-ai/videos/crunches.mp4',
  '/gym-app-ai/videos/dish_and_tucks.mp4',
  '/gym-app-ai/videos/bicycle_crunches.mp4',
  '/gym-app-ai/videos/lat_pulldown.mp4',
  '/gym-app-ai/videos/omni_grip_chest_supported_rows.mp4',
  '/gym-app-ai/videos/omni_directional_face_pull.mp4',
  '/gym-app-ai/videos/ez_bar_bicep_curl.mp4',
  '/gym-app-ai/videos/db_preacher_curl.mp4',
  '/gym-app-ai/videos/seated_rows.mp4',
  '/gym-app-ai/videos/wrist_extentions.mp4',
  '/gym-app-ai/videos/db_pullover.mp4',
  '/gym-app-ai/videos/1_arm_half_kneeling_let_pulldown.mp4',
  '/gym-app-ai/videos/pull_ups.mp4',
  '/gym-app-ai/videos/db_rows.mp4',
  '/gym-app-ai/videos/barbell_shrug_ins.mp4',
  '/gym-app-ai/videos/reverse_pec_deck.mp4',
  '/gym-app-ai/videos/overhead_cable_bicep_curl.mp4',
  '/gym-app-ai/videos/wrist_curls.mp4',
  '/gym-app-ai/videos/standing_arnold_press.mp4',
  '/gym-app-ai/videos/cross_body_y_raise.mp4',
  '/gym-app-ai/videos/pressdown+overhead_ext.mp4',
  '/gym-app-ai/videos/cross_body_tricep_ext.mp4',
  '/gym-app-ai/videos/bench_press.mp4',
  '/gym-app-ai/videos/larsen_press.mp4',
  '/gym-app-ai/videos/pec_deck.mp4',
  '/gym-app-ai/videos/bent_over_cable_fly.mp4',
  '/gym-app-ai/videos/machine_shoulder_press.mp4',
  '/gym-app-ai/videos/cable_bar_reverse_grip_pushdown.mp4',
  '/gym-app-ai/videos/machine_lateral_raise.mp4',
  '/gym-app-ai/videos/plate_front_raise.mp4',
  '/gym-app-ai/videos/incline_bench_press.mp4',
  '/gym-app-ai/videos/cable_lateral_raise.mp4',
  '/gym-app-ai/videos/hammer_grip_preacher_curl.mp4',
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
