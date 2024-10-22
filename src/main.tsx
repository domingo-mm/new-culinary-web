import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {PersistQueryClientProvider} from "@tanstack/react-query-persist-client";
import {QueryClient} from "@tanstack/react-query";
import {createSyncStoragePersister} from "@tanstack/query-sync-storage-persister";

const queryClient = new QueryClient();
const persister = createSyncStoragePersister({
    storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
            <App />
      </PersistQueryClientProvider>
  </React.StrictMode>,
)
