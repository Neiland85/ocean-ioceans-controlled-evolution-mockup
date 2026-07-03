import { createRouter, createWebHistory } from 'vue-router'
import EntryView from '../modules/entry/EntryView.vue'
import EvidenceView from '../modules/evidence/EvidenceView.vue'
import InternalToolsView from '../modules/internal-tools/InternalToolsView.vue'
import OpportunitiesView from '../modules/opportunities/OpportunitiesView.vue'
import AIGovernanceView from '../modules/ai-governance/AIGovernanceView.vue'
import LogsView from '../modules/logs/LogsView.vue'
import BudgetView from '../modules/budget/BudgetView.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: EntryView },
    { path: '/evidence', component: EvidenceView },
    { path: '/internal-tools', component: InternalToolsView },
    { path: '/opportunities', component: OpportunitiesView },
    { path: '/ai-governance', component: AIGovernanceView },
    { path: '/logs', component: LogsView },
    { path: '/budget', component: BudgetView }
  ]
})

