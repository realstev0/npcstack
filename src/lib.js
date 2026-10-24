import tools from './data/tools.json';
export const REPO = 'https://github.com/realstev0/npcstack';
export const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
export const ENGINE_NAMES = { unity:'Unity', unreal:'Unreal Engine', godot:'Godot', blender:'Blender', roblox:'Roblox', cocos:'Cocos', web:'Web / browser', gdevelop:'GDevelop', custom:'Custom engines', pc:'PC', any:'Engine-agnostic' };
export const STAGE_NAMES = { '3d-assets':'3D assets', '2d-art':'2D art & sprites', animation:'Animation', audio:'Audio, music & voice', code:'Code & engine agents', 'concept-design':'Concept & game design', 'npc-runtime':'NPCs & runtime AI', qa:'QA & playtesting', localization:'Localization', marketing:'Marketing & store assets', 'player-tools':'Player tools' };
export const active = tools.filter(t => t.status === 'active');
// Paid "Featured" placement only changes ORDER (featured first, then A–Z). It never touches scores.
export const featuredFirst = (a,b) => (Number(!!b.featured) - Number(!!a.featured)) || a.name.localeCompare(b.name);
export const engines = [...new Set(active.flatMap(t => t.engines))].sort();
export const stages = [...new Set(active.flatMap(t => t.stages))].sort();
export const byEngine = e => active.filter(t => t.engines.includes(e)).sort(featuredFirst);
export const byStage = s => active.filter(t => t.stages.includes(s)).sort(featuredFirst);
export function itemList(name, items, site, base) {
  return { '@context':'https://schema.org', '@type':'ItemList', name, numberOfItems: items.length,
    itemListElement: items.map((t,i)=>({ '@type':'ListItem', position:i+1, name:t.name, url:new URL(`${base}/tools/${t.id}/`, site).href })) };
}
// BreadcrumbList structured data. crumbs: [[name, path], ...] where path is relative to base ('/' = home).
export function breadcrumbs(crumbs, site, base) {
  return { '@context':'https://schema.org', '@type':'BreadcrumbList',
    itemListElement: crumbs.map(([name, path], i)=>({ '@type':'ListItem', position:i+1, name, item:new URL(`${base}${path}`, site).href })) };
}
