export interface HomeState {
    loading: boolean;
    error?: string;
    analyzeImage: (image: string) => Promise<void>;
    clearError: () => void;
}