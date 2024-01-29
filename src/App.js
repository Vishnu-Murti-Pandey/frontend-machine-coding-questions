import './App.css';
import SearchWithAutoSuggestions from './questions/SearchWithAutoSuggestions';
import CustomSwitchCaseComponentInReact from './questions/CustomSwitchCaseComponentInReact';
import InfiniteScrollReact from './questions/InfiniteScrollReact';
import FeatureFlagInReact from './questions/featureFlagInReact/FeatureFlagInReact';
import WhyDidYouUpdateHook from './questions/whyDidYouUpdateHook/WhyDidYouUpdateHook';
import StepperWrapper from './questions/stepperInReact/StepperWrapper';
import { TodoList } from './questions/editableToDoList/TodoList';
import SearchWithPagination from './questions/searchWithPagination/SearchWithPagination';
import Slideshow from './questions/responsiveSlideshow/Slideshow';
import ModalWrapper from './questions/modalInReact/ModalWrapper';
import Website from './questions/websiteWalkThroughHelper/Website';
import Product from './questions/captureProduct/Product';
import Counter from './questions/incrementCounter/Counter';
import DebounceThrottle from './questions/handleDebouncingAndThrotling/DebounceThrottle';
import File from './questions/filerExplorer/File';
import explorer from './questions/filerExplorer/folderData';
import Password from './questions/passwordGenerator/Password';
import ProgressBar from './questions/progressBar/ProgressBar';

function App() {
  return (
    <>
      {/* <SearchWithAutoSuggestions /> */}
      {/* <CustomSwitchCaseComponentInReact /> */}
      {/* <InfiniteScrollReact /> */}
      {/* <FeatureFlagInReact /> */}
      {/* <WhyDidYouUpdateHook /> */}
      {/* <StepperWrapper /> */}
      {/* <TodoList /> */}
      {/* <SearchWithPagination /> */}
      {/* <Slideshow /> */}
      {/* <ModalWrapper /> */}
      {/* <Website /> */}
      {/* <Product /> */}
      {/* <Counter /> */}
      {/* <DebounceThrottle /> */}
      {/* <File explorer={explorer} /> */}
      {/* <Calculator /> */}
      {/* <Password /> */}
      <ProgressBar />
    </>
  );
}

export default App;
